<#
.SYNOPSIS
  Bump the app version in one shot so the three version sources stay in sync.

.DESCRIPTION
  AINOW has three places that track the release version:
    1) js/app.js          — `const APP_VERSION = 'vX.YY';`
    2) service-worker.js  — `const CACHE_NAME  = 'ai-edu-vX.YY';`
    3) index.html         — `?v=NN` cache-busting query on each <script>/<link>

  This script updates all three at once so you never ship with a drifted cache.

.USAGE
  # From the repo root:
  powershell -ExecutionPolicy Bypass -File scripts/bump-version.ps1 -NewVersion 0.91

.NOTES
  The `?v=NN` query uses an integer (derived by stripping "0." from NewVersion),
  matching the existing convention (?v=89 ↔ APP_VERSION v0.89).
#>
param(
    [Parameter(Mandatory=$true)]
    [string]$NewVersion
)

$ErrorActionPreference = 'Stop'

# Normalize inputs
$NewVersion = $NewVersion.TrimStart('v')
if ($NewVersion -notmatch '^\d+\.\d+$') {
    throw "NewVersion must look like '0.90' or '1.00', got '$NewVersion'"
}
$qvNumber = [int]($NewVersion.Split('.')[1])

Write-Host "Bumping to v$NewVersion (query ?v=$qvNumber)" -ForegroundColor Cyan

$root = Split-Path -Parent $PSScriptRoot
if (-not $root) { $root = Split-Path -Parent (Get-Location).Path }

# 1) js/app.js
$appJs = Join-Path $root 'js/app.js'
(Get-Content $appJs -Raw) `
    -replace "const APP_VERSION = '[^']+';", "const APP_VERSION = 'v$NewVersion';" `
    | Set-Content $appJs -NoNewline
Write-Host "  updated js/app.js"

# 2) service-worker.js
$sw = Join-Path $root 'service-worker.js'
(Get-Content $sw -Raw) `
    -replace "const CACHE_NAME = '[^']+';", "const CACHE_NAME = 'ai-edu-v$NewVersion';" `
    | Set-Content $sw -NoNewline
Write-Host "  updated service-worker.js"

# 3) index.html — every ?v=NN becomes the new number
$idx = Join-Path $root 'index.html'
(Get-Content $idx -Raw) `
    -replace '\?v=\d+', "?v=$qvNumber" `
    | Set-Content $idx -NoNewline
Write-Host "  updated index.html"

Write-Host "`nDone. Commit these three files together." -ForegroundColor Green

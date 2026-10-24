"""Create reproducible static-web and corresponding-source release archives.

No build, native files, repository metadata or deployment. Run from any directory.
"""
from pathlib import Path
import hashlib
import json
import zipfile

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'dist'
NAME = 'AINOW-Literacy-web-v0.95'
PUBLIC_ROOTS = ('assets', 'edu', 'biz', 'dev')
PUBLIC_FILES = ('index.html', 'landing.css', 'help.html', 'about.html', 'settings.html', '404.html',
                'manifest.json', 'service-worker.js', 'robots.txt', 'sitemap.xml',
                'LICENSE', 'THIRD_PARTY_NOTICES.md')
SKIP = {'tools', 'tests', '__pycache__', 'node_modules'}


def digest(data):
    return hashlib.sha256(data).hexdigest()


def public_files():
    paths = [ROOT / name for name in PUBLIC_FILES]
    for folder in PUBLIC_ROOTS:
        paths.extend(p for p in (ROOT / folder).rglob('*') if p.is_file()
                     and not any(x.startswith('.') or x in SKIP for x in p.relative_to(ROOT).parts)
                     and p.suffix.lower() not in {'.zip', '.pyc', '.bak'})
    return sorted(set(paths))


def package(paths, filename):
    records = {}
    archive = OUT / filename
    with zipfile.ZipFile(archive, 'w', compression=zipfile.ZIP_DEFLATED, compresslevel=9) as target:
        for path in sorted(set(paths)):
            relative = path.relative_to(ROOT).as_posix()
            assert path.resolve().is_relative_to(ROOT)
            assert not any(x in {'android', 'mobile-prototype', '.git', '.codex', '.agents'} for x in path.relative_to(ROOT).parts)
            content = path.read_bytes()
            entry = zipfile.ZipInfo(relative, (2026, 10, 22, 0, 0, 0))
            entry.create_system = 3
            entry.compress_type = zipfile.ZIP_DEFLATED
            entry.external_attr = 0o100644 << 16
            target.writestr(entry, content)
            records[relative] = digest(content)
        target.writestr(zipfile.ZipInfo('SHA256SUMS.json', (2026, 10, 22, 0, 0, 0)),
                        json.dumps(records, indent=2, sort_keys=True) + '\n')
    with zipfile.ZipFile(archive) as check:
        assert check.testzip() is None
        for name, sha in records.items():
            assert digest(check.read(name)) == sha == digest((ROOT / name).read_bytes())
    return {'file': filename, 'files': len(records), 'bytes': archive.stat().st_size,
            'sha256': digest(archive.read_bytes()), 'sourceMatch': True, 'crcPassed': True}


if __name__ == '__main__':
    OUT.mkdir(exist_ok=True)
    public = public_files()
    source = public + [ROOT / x for x in ('README.md', 'CHANGELOG.md', 'Home.md', 'CONTRIBUTING.md', 'AGENTS.md',
                                          'docs/RELEASE-NOTES-v0.95.md',
                                          'docs/web-v095/design-system/README.md',
                                          'docs/web-v095/release-readiness/README.md',
                                          'docs/web-v095/final-audit/README.md',
                                          'docs/web-v095/final-audit/functional-review.json',
                                          'docs/web-v095/final-audit/cleanup-review.md',
                                          'docs/web-v095/final-audit/comment-verification.json',
                                          'docs/web-v095/final-audit/dead-css-cleanup.json',
                                          'docs/web-v095/final-audit/responsive-matrix.json',
                                          'docs/web-v095/final-audit/design-review.md',
                                          'docs/web-v095/final-audit/browser-checks.json',
                                          'docs/web-v095/final-audit/root-smoke.json',
                                          'docs/web-v095/final-audit/classroom-export.json',
                                          'docs/web-v095/final-audit/static-checks.json',
                                          'docs/web-v095/final-audit/isolation.json')]
    source += [ROOT / 'docs/web-v095/guide-help-settings' / name for name in ('README.md', 'browser-matrix.json', 'behavior-checks.json', 'offline-checks.json', 'isolation.json', 'static-checks.json', 'invalid-backup.json', 'source-verification.json', 'package-verification.json', 'tests.tap', 'source-tests.tap', 'runtime-changes.json', '14-help-en-light-desktop.jpg', '15-settings-data-en-light-desktop.jpg', '10-settings-sq-dark-390-stable.jpg', '12-help-dev-sq-dark-320-stable.jpg', '13-settings-backup-invalid-320.jpg', '16-guide-rounded-en-light-390.jpg')]
    source += [ROOT / 'docs/web-v095/help-contents' / name for name in ('README.md', 'browser-checks.json', 'interaction-checks.json', 'full-tests.tap', 'static-checks.json', '04-dev-desktop-stable.jpg', '05-dev-mobile-stable.jpg')]
    source += [ROOT / 'docs/web-v095/reader-builder' / name for name in ('README.md', 'reader-matrix.json', 'reader-interactions.json', 'builder-matrix.json', 'builder-surface-checks.json', 'offline-checks.json', 'isolation.json', 'runtime-changes.json', 'static-checks.json', 'tests.tap', 'source-tests.tap', 'source-verification.json', 'package-verification.json', '10-builder-desktop-verified.jpg', '13-edu-sq-dark-390-direct-stable.jpg', '14-builder-sq-dark-390-final.jpg', '15-edu-en-light-desktop-final.jpg')]
    source += [ROOT / 'docs/web-v095/prompt-launcher' / name for name in ('README.md', 'browser-checks.json', 'interaction-checks.json', 'runtime-changes.json', 'static-checks.json', 'tests.tap', 'source-tests.tap', 'source-verification.json', 'package-verification.json', '03-edu-sq-dark-390.jpg', '05-edu-default-preview.jpg')]
    source += [ROOT / 'docs/web-v095/release-final' / name for name in ('README.md', 'rollback.json', 'cleanup.json', 'isolation.json', 'version-checks.json', 'static-checks.json', 'tests.tap', 'source-tests.tap', 'source-verification.json', 'package-verification.json', 'comments-review.json', 'comments-before.json', 'comments-after.json', 'unused-bindings-before.json', 'unused-bindings-after.json', 'browser-smoke.json', 'guide-check.json', 'glow-checks.json', '01-pagination-flat.jpg')]
    source += list((ROOT / 'scripts').glob('verify-*.cjs'))
    source += [ROOT / 'docs/web-v095/security-release' / name for name in ('README.md', 'local-review.json', 'tests.tap')]
    source += [ROOT / 'scripts/serve-web.py', ROOT / 'scripts/package-web.py', ROOT / 'dev/tools/sync-content.py']
    report = {'version': '0.95', 'date': '2026-10-24', 'deployed': False,
              'archives': [package(public, NAME + '.zip'), package(source, NAME + '-source.zip')]}
    (OUT / (NAME + '-checksums.json')).write_text(json.dumps(report, indent=2) + '\n', encoding='utf-8')
    print(json.dumps(report, indent=2))

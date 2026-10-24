"""Create one reproducible downloadable AINOW app archive.

No build, native files, repository metadata or deployment. Run from any directory.
"""
from pathlib import Path
import hashlib
import json
import zipfile

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'dist'
NAME = 'AINOW-Literacy-v0.95'
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
                     and not p.is_relative_to(ROOT / 'assets/screenshots')
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
    report = {'version': '0.95', 'date': '2026-10-24', 'deployed': False,
              'archives': [package(public_files(), NAME + '.zip')]}
    (OUT / (NAME + '-checksums.json')).write_text(json.dumps(report, indent=2) + '\n', encoding='utf-8')
    print(json.dumps(report, indent=2))

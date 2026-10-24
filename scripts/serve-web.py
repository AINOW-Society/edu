"""Loopback-only web preview. Android, signing files and local tools are not served."""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = {'edu', 'biz', 'dev', 'assets', 'index.html', 'landing.css', 'manifest.json',
          'service-worker.js', 'help.html', 'about.html', 'settings.html', '404.html', 'robots.txt', 'sitemap.xml', 'LICENSE', 'THIRD_PARTY_NOTICES.md'}

class PreviewServer(ThreadingHTTPServer):
    request_queue_size = 128

class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def send_head(self):
        parts = Path(unquote(urlsplit(self.path).path).lstrip('/')).parts
        if any(p.startswith('.') or p in {'tools','tests','__pycache__'} for p in parts) or (parts and parts[0] not in PUBLIC):
            self.send_error(404)
            return None
        resolved = (ROOT / unquote(urlsplit(self.path).path).lstrip('/')).resolve()
        if not resolved.is_relative_to(ROOT):
            self.send_error(404)
            return None
        if resolved.is_dir() and not (resolved / 'index.html').exists():
            self.send_error(404)
            return None
        return super().send_head()

    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache')
        super().end_headers()

    def copyfile(self, source, outputfile):
        try:
            super().copyfile(source, outputfile)
        except (BrokenPipeError, ConnectionResetError, ConnectionAbortedError):
            pass

    def log_message(self, format, *args):
        # A full offline cache contains 1,000 files. Avoid filling the tool pipe.
        if len(args) > 1 and str(args[1]).startswith(('4', '5')):
            super().log_message(format, *args)

if __name__ == '__main__':
    print('AINOW web preview: http://127.0.0.1:4180/', flush=True)
    PreviewServer(('127.0.0.1', 4180), Handler).serve_forever()

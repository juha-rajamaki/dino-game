#!/usr/bin/env python3
"""Serves the game on this computer the way GitHub Pages does, so the views
have the same tidy addresses: http://localhost:8000/map, /cards/zuul and so on.
Any path with no file behind it gets 404.html, which hands it to the game.

    python3 tools/serve.py          http://localhost:8000/
    python3 tools/serve.py 8080     another port

Only listens on this computer (127.0.0.1).
"""
import http.server
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


class Pages(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def send_head(self):
        path = self.translate_path(self.path)
        # never .git/, .claude/ or any other hidden file: only the game
        hidden = any(part.startswith(".") for part in os.path.relpath(path, ROOT).split(os.sep) if part != ".")
        if not hidden and (os.path.isfile(path) or os.path.isfile(os.path.join(path, "index.html"))):
            return super().send_head()
        with open(os.path.join(ROOT, "404.html"), "rb") as f:
            body = f.read()
        self.send_response(404)
        self.send_header("Content-Type", "text/html; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        if self.command != "HEAD":
            self.wfile.write(body)
        return None


def main():
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
    server = http.server.ThreadingHTTPServer(("127.0.0.1", port), Pages)
    print("Dinomemory on http://localhost:%d/  (Ctrl+C to stop)" % port)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass


if __name__ == "__main__":
    main()

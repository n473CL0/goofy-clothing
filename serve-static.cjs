const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const root = __dirname;
const port = Number(process.env.PORT || 4174);

const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
};

function send(res, status, filePath) {
  const ext = path.extname(filePath);
  res.writeHead(status, {
    "content-type": types[ext] || "application/octet-stream",
  });
  fs.createReadStream(filePath).pipe(res);
}

http
  .createServer((req, res) => {
    const url = new URL(req.url || "/", `http://localhost:${port}`);
    const requestedPath = path.normalize(decodeURIComponent(url.pathname));
    const filePath = path.join(root, requestedPath === "/" ? "index.html" : requestedPath);

    if (!filePath.startsWith(root)) {
      send(res, 404, path.join(root, "404.html"));
      return;
    }

    fs.stat(filePath, (error, stats) => {
      if (!error && stats.isFile()) {
        send(res, 200, filePath);
        return;
      }
      send(res, 200, path.join(root, "index.html"));
    });
  })
  .listen(port, () => {
    console.log(`Static site running at http://localhost:${port}`);
  });

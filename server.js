const http = require("http");
const fs = require("fs");
const path = require("path");

const port = process.env.PORT || 3000;
const baseDir = __dirname;

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

function sendFile(filePath, response) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = contentTypes[ext] || "application/octet-stream";

  fs.readFile(filePath, (error, data) => {
    if (error) {
      response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Not found");
      return;
    }

    response.writeHead(200, { "Content-Type": contentType });
    response.end(data);
  });
}

http
  .createServer((request, response) => {
    const requestPath = request.url === "/" ? "/index.html" : request.url;
    const safePath = path.normalize(requestPath).replace(/^(\.\.[/\\])+/, "");
    const filePath = path.join(baseDir, safePath);

    fs.stat(filePath, (error, stats) => {
      if (!error && stats.isDirectory()) {
        sendFile(path.join(filePath, "index.html"), response);
        return;
      }

      sendFile(filePath, response);
    });
  })
  .listen(port, () => {
    console.log(`CV site running at http://localhost:${port}`);
  });

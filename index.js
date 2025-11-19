const http = require("node:http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("./index.html", "utf8", (err, data) => {
      if (err) {
        console.log(err);
        res.end("error");
      }
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(data);
    });
  } else if (req.url === "/about") {
    fs.readFile("./about.html", "utf8", (err, data) => {
      if (err) {
        console.log(err);
        res.end("error");
      }
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(data);
    });
  } else if (req.url === "/contact-me") {
    fs.readFile("./contact-me.html", "utf8", (err, data) => {
      if (err) {
        console.log(err);
        res.end("error");
      }
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(data);
    });
  } else {
    // Handle other routes or serve 404
    fs.readFile("./404.html", "utf8", (err, data) => {
      if (err) {
        console.log(err);
        res.end("error");
      }
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/html");
      res.end(data);
    });
  }
});

server.listen(8080, () => {
  console.log(`Server is running`);
});

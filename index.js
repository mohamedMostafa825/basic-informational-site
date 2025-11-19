const express = require("express");

const fs = require("fs");

const app = express();

const PORT = process.env.PORT || 8080;

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     fs.readFile("./index.html", "utf8", (err, data) => {
//       if (err) {
//         console.log(err);
//         res.end("error");
//       }
//       res.statusCode = 200;
//       res.setHeader("Content-Type", "text/html");
//       res.end(data);
//     });
//   } else if (req.url === "/about") {
//     fs.readFile("./about.html", "utf8", (err, data) => {
//       if (err) {
//         console.log(err);
//         res.end("error");
//       }
//       res.statusCode = 200;
//       res.setHeader("Content-Type", "text/html");
//       res.end(data);
//     });
//   } else if (req.url === "/contact-me") {
//     fs.readFile("./contact-me.html", "utf8", (err, data) => {
//       if (err) {
//         console.log(err);
//         res.end("error");
//       }
//       res.statusCode = 200;
//       res.setHeader("Content-Type", "text/html");
//       res.end(data);
//     });
//   } else {
//     // Handle other routes or serve 404
//     fs.readFile("./404.html", "utf8", (err, data) => {
//       if (err) {
//         console.log(err);
//         res.end("error");
//       }
//       res.statusCode = 404;
//       res.setHeader("Content-Type", "text/html");
//       res.end(data);
//     });
//   }
// });

app.get("/", (req, res) => {
  fs.readFile("./index.html", (err, data) => {
    if (err) {
      res.end(err);
    }
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.send(data);
  });
});

app.get("/about", (req, res) => {
  fs.readFile("./about.html", (err, data) => {
    if (err) {
      res.end(err);
    }
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.send(data);
  });
});

app.get("/contact-me", (req, res) => {
  fs.readFile("./contact-me.html", (err, data) => {
    if (err) {
      res.end(err);
    }
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.send(data);
  });
});

app.get("/{*splat}", (req, res) => {
  fs.readFile("./404.html", (err, data) => {
    if (err) {
      res.end(err);
    }
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.send(data);
  });
});

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`listening on port ${PORT}`);
});

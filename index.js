const express = require("express");

const fs = require("fs");

const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  fs.readFile("./index.html", (err, data) => {
    if (err) {
      res.end(err);
    }
    res.statusCode = 200;
    res.send(data);
  });
});

app.get("/about", (req, res) => {
  fs.readFile("./about.html", (err, data) => {
    if (err) {
      res.end(err);
    }
    res.statusCode = 200;
    res.send(data);
  });
});

app.get("/contact-me", (req, res) => {
  fs.readFile("./contact-me.html", (err, data) => {
    if (err) {
      res.end(err);
    }
    res.statusCode = 200;
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

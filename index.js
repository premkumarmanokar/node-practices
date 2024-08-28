//importing the express module
const express = require("express");
const fs = require("fs");
//create an express application
const app = express();

app.get("/stats", (req, res) => {
  fs.stat("./files/test.txt", (err, stats) => {
    if (err) {
      res.send(err);
    } else {
      res.json({
        size: `${stats.size} bytes`,
        isFile: stats.isFile(),
        isDirectory: stats.isDirectory(),
        isSymbolicLink: stats.isSymbolicLink(),
      });
    }
  });
});

app.post("/create", (req, res) => {
  fs.writeFile("./files/newfile.txt", "Hello world!", (err) => {
    if (err) {
      res.send(err);
    } else {
      res.send("File created successfully");
    }
  });
});

app.get("/read", (req, res) => {
  fs.readFile("./files/test.txt", "utf8", (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

//starting the server by listening on a port for incoming requests
app.listen(3001, "localhost", () => {
  console.log("server is running on http://localhost:3001");
});

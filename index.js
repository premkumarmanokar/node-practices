//importing the express module
const express = require("express");

//create an express application
const app = express();

app.get("/", (req, res) => {
  res.send("GET world!");
});

app.post("/", (req, res) => {
  res.send("POST world!");
});

app.get("/test", (req, res) => {
  res.send("GET test!");
});

//starting the server by listening on a port for incoming requests
app.listen(3001, "localhost", () => {
  console.log("server is running on http://localhost:3001");
});

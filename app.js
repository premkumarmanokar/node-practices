// import the express module
const express = require("express");
const companyRouter = require("./Routes/companyRoutes");

// create an express application
const app = express();

// use the express middleware to parse JSON bodies
app.use(express.json());

app.use("/companies", companyRouter);

// export the express application
module.exports = app;



"use strict";

/* Node and npm imports*/
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var routes = require('./routes/routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes);

app.get("/", function (req, res) {
  res.send({"here": "gone"});
});
 
app.listen(3000, "0.0.0.0");

//JWHITESELL test comment
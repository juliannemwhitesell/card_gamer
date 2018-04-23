"use strict";
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send({"here": "gone"});
});

app.post("/", function (req, res) {
	let received = req.body;
	let payload = { "received" : received };
	res.send(payload);
});
 
app.listen(3000, "0.0.0.0");
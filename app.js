"use strict";

/* Node and npm imports */
var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes/routes");

/* local imports */
var SERVER_CONSTANTS = require("./constants/server");

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes);
 
app.listen(SERVER_CONSTANTS.PORT_NUMBER, SERVER_CONSTANTS.IP_ADDRESS);

console.log("Listening on port " + SERVER_CONSTANTS.PORT_NUMBER + ".");
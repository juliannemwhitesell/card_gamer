"use strict";
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

//Mongo setup code: this can be abstracted away from the main app
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/game", function(err) {
 	// If no error, successfully connected
 	if (!err){
  		console.log ("connected to localhost:27017/game");
	}
});

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

//Experimental Mongo code for endpoint
var gameSchema = new mongoose.Schema({
  gameId: String,
  playerIds: Array
});

var Game = mongoose.model("Game", gameSchema);

app.post("/game", (req, res) => {
	let received = req.body;
	//TODO: call the validate function
	//TODO: call the save function
	var newGame = new Game(received);
  	newGame.save()
    	.then(item => {
    		//find out how to get the item's id and add it to received before sending.
      		res.send({ "saved" : received });
    	})
    	.catch(err => {
      		res.status(400).send("Unable to save game to database");
    	});
    //TODO: does a mongo save give you the id? We need to provide that to the user on the response.
	//let payload = { "received" : received };
	//res.send(payload);
});
 
app.listen(3000, "0.0.0.0");
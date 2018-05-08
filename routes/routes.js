"use strict";
var express = require('express');
var router = express.Router();

/* Local imports*/
var Game = require("../models/game");

//TODO: Mongo setup code: this can be abstracted away from the main app
var ObjectID = require('mongodb').ObjectID;
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/game", function(err) {
 	// If no error, successfully connected
 	if (!err){
  		console.log ("connected to localhost:27017/game");
	}
});

router.post("/", function (req, res) {
	let received = req.body;
	let payload = { "received" : received };
	res.send(payload);
});

router.post("/game", (req, res) => {
	let received = req.body;
	//TODO: call the validate function
	//TODO: call the save function
	var newGame = new Game(received);
	newGame._id = ObjectID();
	console.log(newGame);
  	newGame.save()
    	.then(item => {
      		res.send({ "saved" : newGame });
    	})
    	.catch(err => {
      		res.status(400).send("Unable to save game to database: " + err);
    	});
});

router.get("/game/:id", (req, res) => {
	Game.find({ _id: req.params.id }, function(err, game) {
		if (err){ 
			if (null == game){
				res.status(404).send();
			} else {
				res.status(500).send("Could not find user: " + err);
			}
		} else {
			res.send(game);
		}
	});
})

app.get("/", function (req, res) {
  res.send({"here": "gone"});
});

module.exports = router;
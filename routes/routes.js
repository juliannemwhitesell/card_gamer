"use strict";
var express = require('express');
var router = express.Router();

/* Local imports*/
//var Game = require("../models/game");
var GameService = require("../data/gameService");

router.post("/game", (req, res) => {
	//let received = req.body;
	//TODO: call the validate function
	//TODO: call the save function
	GameService.saveGame(req.body, res);
	// var newGame = new Game(received);
	// newGame._id = ObjectID();
	// console.log(newGame);
 //  	newGame.save()
 //    	.then(item => {
 //      		res.send({ "saved" : newGame });
 //    	})
 //    	.catch(err => {
 //      		res.status(400).send("Unable to save game to database: " + err);
 //    	});
});

router.post("/", function (req, res) {
	let received = req.body;
	let payload = { "received" : received };
	res.send(payload);
});

router.get("/game/:id", (req, res) => {
	GameService.findGame(req.params.id, res);
	// Game.find({ _id: req.params.id }, function(err, game) {
	// 	if (err){ 
	// 		if (null == game){
	// 			res.status(404).send();
	// 		} else {
	// 			res.status(500).send("Could not find user: " + err);
	// 		}
	// 	} else {
	// 		res.send(game);
	// 	}
	// });
})

router.get("/", function (req, res) {
  res.send({"here": "gone"});
});

module.exports = router;
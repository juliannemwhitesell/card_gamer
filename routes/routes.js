"use strict";
var express = require('express');
var router = express.Router();

/* Local imports*/
var GameService = require("../services/gameService");

router.post("/game", (req, res) => {
	//TODO: call the validate function
	GameService.saveGame(req.body, res);
});

router.post("/", function (req, res) {
	let received = req.body;
	let payload = { "received" : received };
	res.send(payload);
});

router.get("/game/:id", (req, res) => {
	GameService.findGame(req.params.id, res);
})

router.get("/", function (req, res) {
  res.send({"here": "gone"});
});

module.exports = router;
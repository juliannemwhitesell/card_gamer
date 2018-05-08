"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//Experimental Mongo code for endpoint
var gameSchema = new mongoose.Schema({
  _id: mongoose.Schema.ObjectId,
  gameId: String,
  playerIds: Array
});

var Game = mongoose.model("Game", gameSchema);

module.exports = Game;
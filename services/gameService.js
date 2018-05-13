"use strict";

var DataService = require("../data/dataService");
var Game = require("../models/game");

function saveGame (received, res) {
  var newGame = new Game(received);
  DataService.Save(newGame, res);
}

function findGame(id, res) {
  Game.find({ _id: id }, function(err, game) {
    DataService.Find(err, game, res);
  });
}

module.exports = {
  saveGame: saveGame,
  findGame: findGame,
};
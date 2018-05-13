"use strict";

var MONGO_CONSTANTS = require("../constants/mongo");
var SERVER_CONSTANTS = require("../constants/server");

//TODO: Mongo setup code: this can be abstracted away from the main app
var ObjectID = require("mongodb").ObjectID;
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

var connectionString = MONGO_CONSTANTS.MONGO_PREFIX 
						+ SERVER_CONSTANTS.SERVER 
						+ ":" 
						+ MONGO_CONSTANTS.PORT_NUMBER 
						+ "/" 
						+ MONGO_CONSTANTS.GAME_COLLECTION_NAME;

mongoose.connect(connectionString, function(err) {
 	// If no error, successfully connected
 	if (!err){
  		console.log ("connected to " + connectionString + ".");
	}
});

function Save (item, res) {
	item._id = ObjectID();
  	console.log(item);
    item.save()
      	.then(item => {
          	res.send({ "saved" : item });
      	})
      	.catch(err => {
          	res.status(400).send("Unable to save " 
          						 + MONGO_CONSTANTS.GAME_COLLECTION_NAME 
          						 + " to database: " 
          						 + err
          						);
      	});
}

function Find (err, item, res) {
	if (err){ 
	      	if (null == item){
        	res.status(404).send();
      	} else {
        	res.status(500).send("Could not find user: " + err);
      	}
    } else {
      	res.send(item);
    }
}

module.exports = {
	Save: Save,
	Find: Find,
};
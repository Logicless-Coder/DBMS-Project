var mongoose = require("mongoose");
require("dotenv").config();

var conn = mongoose.connect(
	process.env.MONGODB_URI,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	(err) => {
		if (!err) {
			console.log("Moongoose connect succeded...");
		} else {
			console.log(process.env.MONGODB_URI);
			console.log("ERROR : ", err);
		}
	}
);

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://deeksha325:2515@database-5ivou.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

require("../models/User");

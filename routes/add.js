var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	console.log("add Friends caller");
	var name = req.query.name;
	var descirption = req.query.descirption;

	// add new friend to the arry of friends
	data.friends.puch(newFriedn);
 }
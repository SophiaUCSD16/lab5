var data = require("../data.json");

exports.view = function(req, res) {    
	// Your code goes here
	console.log("add Friends caller");
	var currentName = req.query.name;
	var currentDes = req.query.descirption;

	var newFriend = {
		name: currentName,
		description: currentDes,
		imageURL: "http://lorempixel.com/400/400/people"
	}
		
	data.friends.push(newFriend);

	res.render('index', data);
 }
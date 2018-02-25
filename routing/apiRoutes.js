var friendData = require("../app/data/friends.js")



module.exports = function(app) {
	app.get("/api/friends", function(req, res) {
		res.json(friendData);
	});

	app.post("/api/friends", function(req, res) {
		var newFriend = req.body;
		console.log(newFriend);
		friendData.push(newFriend);
		res.json(newFriend);
	});
};
var friendsData = require("../data/friends.js")
module.exports = function(app) {
	app.get("/api/friends", function(req, res) {
		res.json(friendsData);
	});
	app.post("/api/friends", function(req, res) {
		//Empty array to push matched friend into
		var bestFriend = {
			name: "",
			photo: "",
			friendDifference: 1000
		};
		var newFriend = req.body;
		var userScores = newFriend.scores;
		var totalDiff = 0;
		for (var i = 0; i < friendsData.length; i++) {
			totalDiff = 0
			for (var j = 0; j < friendsData[i].scores[j]; j++) {
				totalDiff += Math.abs(userScores[j]-friendsData[i].scores[j]);
				if (totalDiff<= bestFriend.friendDifference) {
					bestFriend.name = friendsData[i].name;
					bestFriend.photo = friendsData[i].photo;
					bestFriend.friendDifference = totalDiff;
				}
			}
		}
		friendsData.push(newFriend);
		res.json(bestFriend);
	});
};
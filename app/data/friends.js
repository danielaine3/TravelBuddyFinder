//DATA
//Below will be data for all for all of the travel buddies.
//Initially we set it equal to a "dummy" buddy. 
//But it could be an empty array as well
var friendsData = [
	{
		"name": "Kim Kardashian",
		"photo": "https://pbs.twimg.com/profile_images/941034987440128000/52bwGYtY_400x400.jpg",
		"scores": [3,5,4,3,5,4,1,5,2,5]
	},
	{
		"name": "Kylie Jenner",
		"photo": "https://metrouk2.files.wordpress.com/2018/02/pri_68451998-e1519285242449.jpg?w=748&h=462&crop=1",
		"scores": ["3","2","4","4","2","2","2","4","3","3"]
	},
	{
		"name": "Khloe Kardashian",
		"photo": "http://images.eonline.com/eol_images/Entire_Site/201804/rs_600x600-180104093157-Khloepreg600-.jpg?fit=inside|300:300&output-quality=100",
		"scores": ["5","5","5","5","2","2","3","4","3","3"]
	}
];	

//Export the array making it accessible to other files.
module.exports = friendsData;
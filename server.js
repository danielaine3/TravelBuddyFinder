// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({type:"application/vnd.api+json"}));
app.use(express.static('app/public'));

//ROUTER
//The below points our server to sereis of "route" files.
//These routes give out server a "map" of how to respond when users visit or request data from various URLs
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Starts the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});


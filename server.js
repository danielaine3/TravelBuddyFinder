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
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
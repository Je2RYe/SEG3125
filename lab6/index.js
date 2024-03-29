// Entry point for the application

// express application
var express = require('express');
// require the controller we make
var surveyController = require('./surveyController');

var app = express();

// set up template engine
app.set('view engine', 'ejs');

// static file serving
app.use(express.static('./views'));
app.use(express.static('./assets'));
// fire function from surveyController
surveyController(app);

// listen to port
app.listen(3000);
console.log('listening port 3000');
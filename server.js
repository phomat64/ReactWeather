// Import the exress module
var express = require('express');

// Create our app
var app = express();

// Specify the folder you want to expose to the web server
app.use(express.static('public'));

// Start the server. Specify port and function to call once the server is up
app.listen(3000, function() {
  console.log('Express server is up on port 3000');
});

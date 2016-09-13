// Import the exress module
var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next){
  console.log('req.hostname: ' + req.hostname);
  console.log('req.url: ' + req.url);
  console.log('http://' + req.hostname + req.url);
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
})

// Specify the folder you want to expose to the web server
app.use(express.static('public'));

// Start the server. Specify port and function to call once the server is up
app.listen(PORT, function() {
  console.log('Express server is up on port ' + PORT);
});

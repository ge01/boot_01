var express = require('express');
var app = express();

// Set the route to our index page
app.get('/', function(req, res){
  res.send("Hello world from server.js");
});

app.listen(3000);
console.log("Server running on port 3000");

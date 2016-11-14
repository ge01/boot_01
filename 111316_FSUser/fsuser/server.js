var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/fsuser', function(req, res){
  console.log("I received a GET request");

  person1 = {
    name: 'Tim',
    email: 'tim@email.com'
  };
  person2 = {
    name: 'Emily',
    email: 'emily@email.com'
  };

  var fsuser = [person1, person2];
  res.json(fsuser);
});

app.listen(3000);
console.log("Server running on port 3000");

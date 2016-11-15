var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));
app.get('/fs0213', function(req, res){
  console.log("I received a GET request");

  person1 = {
    name: 'Tim',
    age: 25,
    income: 75000.0
  };

  person2 = {
    name: 'Emily',
    age: 21,
    income: 42000
  };

  var fs0213 = [person1, person2];
  res.json(fs0213);
});

app.listen(3000);
console.log("Server running on port 3000");

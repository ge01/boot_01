var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('fsuser', ['fsuser']);
var bodyParser = require('body-parser');



app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/fsuser', function(req, res){
  console.log("I received a GET request");

  db.fsuser.find(function(err, docs){
    console.log(docs);
    res.json(docs);
  });
});

app.post('/fsuser', function(req,res){
  console.log(req.body);
  db.fsuser.insert(req.body, function(err, doc){
    res.json(doc);
  });
});

app.listen(3000);
console.log("Server running on port 3000");

var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('fs0213', ['fs0213']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/fs0213', function(req, res){
  console.log("I received a GET request");

  db.fs0213.find(function(err, docs){
    console.log(docs);
    res.json(docs);
  });
});

app.post('/fs0213', function(req,res){
  console.log(req.body);
  db.fs0213.insert(req.body, function(err, doc){
    res.json(doc);
  });
});

app.listen(3000);
console.log("Server running on port 3000");

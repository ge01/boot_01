var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('fs0215', ['fs0215']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/fs0215', function(req, res){
  console.log("I received a GET request");

  db.fs0215.find(function(err,docs){
    console.log(docs);
    res.json(docs);
  });
});

app.post('/fs0215', function(req, res){
  console.log(req.body);
  db.fs0215.insert(req.body, function(err, doc){
    res.json(doc);
  });
});

app.delete('/fs0215/:id', function(req, res){
    var id = req.params.id;
    console.log(id);
    db.fs0215.remove({_id: mongojs.ObjectId(id)}, function(err, doc){
      res.json(doc);
    });
});

app.listen(3000);
console.log("Server running on port 3000");

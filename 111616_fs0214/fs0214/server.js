var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

var mongojs = require('mongojs');
// var db = mongojs('fs0214', ['fs0214']);
var MLAB_URI = process.env.MLAB_URI;
var db = mongojs(MLAB_URI, ['fs0214']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/fs0214', function(req,res){
  console.log("I received a GET request");

  db.fs0214.find(function(err, docs){
    console.log(docs);
    res.json(docs);
  });
});

app.post('/fs0214', function(req, res){
  console.log(req.body);
  db.fs0214.insert(req.body, function(err, doc){
    res.json(doc);
  });
});

app.delete('/fs0214/:id', function(req, res){
  var id = req.params.id;
  console.log(id);
  db.fs0214.remove({_id: mongojs.ObjectId(id)}, function(err, doc){
    res.json(doc);
  });
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
// console.log("Server running on port 3000");

var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/fs0214', function(req,res){
  console.log("I received a GET request");

    data1 = {
      salary: '2500.0',
      bonus: '1200.0',
      pay: '3700.0'
    };
    data2 = {
      salary: '2000',
      bonus: '1000',
      pay: '3000'
    };

    var fs0214 = [data1, data2];
    res.json(fs0214);
});

app.listen(3000);
console.log("Server running on port 3000");

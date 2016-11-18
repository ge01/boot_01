var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/fs0215', function(req, res){
  console.log("I received a GET request");

  data1 = {
    originalPrice: "100",
    discount: "0.2",
    salePrice: "80"
  };

  var fs0215 = [data1];
  res.json(fs0215);
});

app.listen(3000);
console.log("Server running on port 3000");

var express = require('express');
var bodyParser = require("body-parser");
var fs = require('fs');
// var path = require('path');

var app = express();

app.set("port", process.env.PORT || 3000);

// app.use(express.static(path.join(__dirname, '/public')));
// app.use(bodyParser.json());
//
app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
//
app.get('/favorites', function(req, res){
  var data = fs.readFileSync('./data.json');
  res.setHeader('Content-Type', 'application/json');
  res.send(data);
});

// app.get('favorites', function(req, res){
//   if(!req.body.name || !req.body.oid){
//     res.send("Error");
//     return
//
//   var data = JSON.parse(fs.readFileSync('./data.json'));
//   data.push(req.body);
//   fs.writeFile('./data.json', JSON.stringify(data));
//   res.setHeader('Content-Type', 'application/json');
//   res.send(data);
// });

app.listen(app.get("port"), function(){
  console.log("Listening on port 3000");
});

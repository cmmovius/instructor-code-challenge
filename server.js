var express = require('express');
var bodyParser = require("body-parser");
var hbs = require("express-handlebars");
var mongoose = require("./db/connection");
// var fs = require('fs');
// var path = require('path');
// In addition to requiring these modules in this file, you also need to run `npm install --save *name of module*` in the command line to install these dependencies.
// You can see what dependencies are currently installed by looking into the `package.json` file.

var app = express();

var Favorite = mongoose.model("Favorite");

app.set("port", process.env.PORT || 3000);
// We use this OR statement here so that when you deploy the app, it can be run on any port your deployment service chooses. When working locally, go to `localhost:3000` to see the app.

// app.use(express.static(path.join(__dirname, '/public')));
// app.use(bodyParser.json());
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));
app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res){
  Favorite.find({}).then(function(favorites){
    res.render("favorites-index", {
      favorites: favorites
    });
  });
});

// app.get('/favorites', function(req, res){
//   var data = fs.readFileSync('./data.json');
//   // res.setHeader('Content-Type', 'application/json');
//   // res.send(data);
//   res.render("favorites-index", {
//     favorites: data
//   });
// });

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
// This is needed so your app knows to connect properly to the localhost.

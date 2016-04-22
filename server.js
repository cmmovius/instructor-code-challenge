// In addition to requiring these modules in this file, you also need to run `npm install --save *name of module*` in the command line to install these dependencies.
// You can see what dependencies are currently installed by looking into the `package.json` file.
var express = require('express');
var bodyParser = require("body-parser");
// Handlebars allows us to interpolate our data and view it on a page.
var hbs = require("express-handlebars");
// This variable allows us to connect to our database. In `connection.js` we exported the mongoose model so it can be used here.
var mongoose = require("./db/connection");

var app = express();

// This variable allows us to connect to the Favorite model in our database.
var Favorite = mongoose.model("Favorite");

// We use this OR statement here so that when you deploy the app, it can be run on any port your deployment service chooses. When working locally, go to `localhost:3000` to see the app.
app.set("port", process.env.PORT || 3000);

// Here we connect our data to our views. `.hbs` is the file extension that is used for express-handlebars files. Our root view is `layout-main`.
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));
//This line connects our app to our css and js assets.
app.use('/public', express.static('public'));
//body-parser is a middleware that helps our data and views talk to each other.
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/favorites", function(req, res){
  Favorite.find({}).then(function(favorites){
    res.render("favorites-index", {
      favorites: favorites
    });
  });
});

app.post("/favorites", function(req, res){
  Favorite.create(req.body.favorite).then(function(favorite){
    res.redirect("/favorites");
  });
});

app.get("/", function(req, res){
  res.render("app-welcome");
});

// This is needed so your app knows to connect properly to the localhost.
app.listen(app.get("port"), function(){
  console.log("Listening on port 3000");
});

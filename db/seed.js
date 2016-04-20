var mongoose = require("./connection");
var seedData = require("./favorites");

var Favorite = mongoose.model("Favorite");

Favorite.remove({}).then(function(){
  Favorite.collection.insert(seedData).then(function(){
    process.exit();
  });
});

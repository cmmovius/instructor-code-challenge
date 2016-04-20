// Here we are connecting `connection.js` and `favorites.json` to seed our database.
var mongoose = require("./connection");
var seedData = require("./favorites");

var Favorite = mongoose.model("Favorite");

// Should we want to reseed our database, this deletes our previous data and puts in our new data.
Favorite.remove({}).then(function(){
  Favorite.collection.insert(seedData).then(function(){
    process.exit();
  });
});

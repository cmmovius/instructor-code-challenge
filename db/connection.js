// Don't forget to `npm install --save mongoose` in the command line!
var mongoose = require("mongoose");

// Here we define all of the attributes of our favorited movie.
var FavoriteSchema = new mongoose.Schema(
  {
    Title: String,
    Year: Number,
    Rated: String,
    Released: String,
    Runtime: String,
    Genre: String,
    Director: String,
    Writer: String,
    Actors: String,
    Plot: String,
    Language: String,
    Country: String,
    Awards: String,
    Poster: String,
    Metascore: Number,
    imdbRating: Number,
    imdbVotes: Number,
    imdbID: String,
    Type: String,
    Response: String
  }
);

//Here we are defining where our data should be stored.
mongoose.model("Favorite", FavoriteSchema);
if(process.env.NODE_ENV == "production"){
  // If we are in deployed production environment, the data will be stored remotely on MongoLab.
  mongoose.connect(process.env.MONGODB_URL);
}else{
  // Otherwise the data will be stored locally in a MongoDB named `codechallenge`.
  mongoose.connect("mongodb://localhost/codechallenge");
}
// Here we are exporting our data into a variable called mongoose so it can be used in our `server.js` file.
module.exports = mongoose;

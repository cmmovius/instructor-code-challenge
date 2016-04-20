var mongoose = require("mongoose");

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

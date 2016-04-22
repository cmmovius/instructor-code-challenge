console.log("I'm connected!");

// This variable selects the search button
var button = document.querySelector("#button");
//When the search button is clicked, the OMDBAPI is called
button.addEventListener("click", function(event){
  //Prevent default is frequently needed on certain event listeners for them to properly follow through with the rest of the function.
  event.preventDefault();
  apiCall();
});

function apiCall() {
  //Keyword grabs the value the user puts in the input field.
  var keyword = document.querySelector("input[name='keyword']").value;
  //We combine this keyword with the rest of our search string.
  var url = "https://www.omdbapi.com/?t="+keyword;
  console.log(url);
  //OMDBAPI Call
  $.ajax({
    url: url, //Sending our url with the keyword search
    type: "GET", //We are requesting to `get` the information in our query
    dataType: "json" //We are requesting that the API return the information as JSON data.
  }).done(function(response){
    console.log(response);
    showMovie(response); //Upon a successful call, perform this function.
  }).fail(function(){
    console.log("fail");
  }).always(function(){
    console.log("Something happens"); //We inlcude this to ensure the our API call is still going through, regardless if it is successful or not.
  });
}

function showMovie(response){
  console.log(response.Title);
  var movie = document.querySelector("#movie");
  movie.innerHTML += ("<h3>" + response.Title+ "<h3>");
  movie.innerHTML += ("<img src='"+ response.Poster +"'>");

  var info = document.querySelector("#showMore");
  info.style.display = "inline";
  info.addEventListener("click", function(){
    console.log("clicked");
    movie.innerHTML += ("<p> Year: " + response.Year+ "<p>");
    movie.innerHTML += ("<p> Rated: " + response.Rated+ "<p>");
    movie.innerHTML += ("<p> Actors: " + response.Actors+ "<p>");
    movie.innerHTML += ("<p> Director: " + response.Director+ "<p>");
    movie.innerHTML += ("<p> Writer: " + response.Writer+ "<p>");
    movie.innerHTML += ("<p> Genre: " + response.Genre+ "<p>");
    movie.innerHTML += ("<p> Plot: " + response.Plot+ "<p>");
    movie.innerHTML += ("<p> Runtime: " + response.Runtime+ "<p>");
    movie.innerHTML += ("<p> Released: " + response.Released+ "<p>");
    movie.innerHTML += ("<p> IMBD Rating: " + response.imdbRating+ "<p>");
  });
}

console.log("I'm connected!");

var button = document.querySelector("#button");
button.addEventListener("click", function(event){
  event.preventDefault();
  apiCall();
});

function apiCall() {
  var keyword = document.querySelector("input[name='keyword']").value;
  var url = "https://www.omdbapi.com/?t="+keyword;
  console.log(url);
  $.ajax({
    url: url,
    type: "GET",
    dataType: "json"
  }).done(function(response){
    console.log(response);
    showMovie(response);
  }).fail(function(){
    console.log("fail");
  }).always(function(){
    console.log("Something happens");
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
  })
}

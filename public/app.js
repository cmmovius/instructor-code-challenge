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
  // $.ajax({
  //   url: url,
  //   type: "GET",
  //   dataType: "json"
  // }).done(function(response){
  //   console.log(response);
  //   // showMovie(response);
  // }).fail(function(){
  //   console.log("fail");
  // }).always(function(){
  //   console.log("Something happens");
  // });
}

// function showMovie(response){
//   var movie = $("#movie");
//   console.log(response.Title);
//   console.log(response.Year);
//   movie.append("<h3>" + response.Title+ "<h3>");
//   movie.append("<img src='"+ response.Poster +"'>");
//   movie.append("<p> Year: " + response.Year+ "<p>");
//   movie.append("<p> Rated: " + response.Rated+ "<p>");
//   movie.append("<p> Actors: " + response.Actors+ "<p>");
// }

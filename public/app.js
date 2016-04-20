console.log("I'm connected!");

$(document).ready(function(){
  var button = $("#button");
  button.on("click", function(event){
    event.preventDefault();
    console.log("clicked!");
    apiCall();
  });
});

function apiCall() {
  console.log("Api Call");
  var keyword = $("input[name='keyword']").val();
  console.log(keyword);
  var url = "https://www.omdbapi.com/?t="+keyword;
  $.ajax({
    url: url,
    type: "GET",
    dataType: "json"
  }).done(function(response){
    console.log(response);
  }).fail(function(){
    console.log("fail");
  }).always(function(){
    console.log("Something happens");
  });
}

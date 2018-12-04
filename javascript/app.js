$(document).ready(function(){


// var apiKey = "FSyytIrzomRaLQisiLmXTgTFkxeIi72a";
// https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=FSyytIrzomRaLQisiLmXTgTFkxeIi72a&limit=5

var btn = $("<button>")
var gifSearch = "cat";
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifSearch + "&api_key=FSyytIrzomRaLQisiLmXTgTFkxeIi72a&limit=5";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response);


});


// Creates 5 starting buttons 
function starterBTNs() {
    
    var starterNames = ["guitar", "80s", "cat", "dog", "bird"];
     
        for(var i = 0; i < starterNames.length; i++) {

            btn.addClass("btn-primary");
            btn.attr("data-name", starterNames[i]);
            btn.text(starterNames[i]);
            $("#new-btns").append(btn);
        }

}

starterBTNs();






});
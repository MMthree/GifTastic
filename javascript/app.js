$(document).ready(function () {


    // var apiKey = "FSyytIrzomRaLQisiLmXTgTFkxeIi72a";
    // https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=FSyytIrzomRaLQisiLmXTgTFkxeIi72a&limit=5

    var btn = $("<button>");
    var div = $("<div>");
    var gifs = ["guitar", "80s", "cat", "dog", "bird"];
    // var results = response.data;
    var searchData = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchData + "&api_key=FSyytIrzomRaLQisiLmXTgTFkxeIi72a&limit=10";
    console.log(gifs);


    // Create 5 starting buttons + create new buttons from search inputs
    function starterBTNs() {

        $("#new-btns").empty();

        for (var i = 0; i < gifs.length; i++) {

            var starters = $("<button>")
            starters.addClass("btn-primary");
            starters.attr("id", "gif-btn");
            starters.attr("data-name", gifs[i]);
            starters.text(gifs[i]);
            $("#new-btns").append(starters);
        }
    }

    // stores the search terms into the gifs array then adds a new button for the search
    $("#search").on("click", function () {
        var textSearch = $("#text-search").val().trim();
        gifs.push(textSearch)

        // clear the search box after click
        $("#text-search").val("");

        console.log(gifs);
        starterBTNs();
    });




    $(".btn-primary").on("click", function () {
        var searchData = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchData + "&api_key=FSyytIrzomRaLQisiLmXTgTFkxeIi72a&limit=3";





        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            var results = response.data;

            for (var i = 0; i < results.length; i++) {
                var rating = $("<p>").text("Rated: " + results[i].rating.toUpperCase());
                rating.addClass("rating");
                var img = $("<img>").attr("src", results[i].images.fixed_width.url);
                div.append(rating, img);
                $("#gifs").prepend(div);
            }
            




        });
    });








    // gifs array starting buttons on page load
    starterBTNs();
}); // Document.ready





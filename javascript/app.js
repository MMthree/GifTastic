$(document).ready(function () {


    // var apiKey = "FSyytIrzomRaLQisiLmXTgTFkxeIi72a";
    // https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=FSyytIrzomRaLQisiLmXTgTFkxeIi72a&limit=5

    var btn = $("<button>");
    var div = $("<div>");
    var gifs = ["guitar", "80s", "cat", "dog", "bird"];
    console.log(gifs);


    // Create 5 starting buttons + create new buttons from search inputs
    function starterBTNs() {

        $("#new-btns").empty();

        for (var i = 0; i < gifs.length; i++) {

            var starters = $("<button>")
            starters.addClass("btn-primary btn gif");
            starters.attr("id", "gif-btn");
            starters.attr("data-name", gifs[i]);
            starters.text(gifs[i]);
            $("#new-btns").append(starters);
        }
    




    // Displays the gifs and gif rating on button click with ajax request
    $(".gif").on("click", function () {
        var searchData = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchData + "&api_key=FSyytIrzomRaLQisiLmXTgTFkxeIi72a&limit=3";





        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            

            var results = response.data;


            // Switched the way gifs displayed to a table
            // (after doing that in the saturday firebase class)
            // This also helps with responsiveness 

            for (var i = 0; i < results.length; i++) {
                // var rating = $("<p>");
                // rating.text("Rated: " + results[i].rating.toUpperCase() + " |  Title: " + results[i].title);
                // rating.addClass("rating");
                var img = $("<img>").attr("src", results[i].images.fixed_width.url);
                // div.append(rating, img);
                // $("#gifs").append(div);

                var tr = $("<tr>")
                tr.append("<td>" + results[i].rating.toUpperCase() + "</td>");
                tr.append("<td>" + results[i].title + "</td>",);
                tr.append(img);
                $("#gif-append").append(tr);
            }
            

        });
    });
    }

    
    // stores the search terms into the gifs array then adds a new button for the search + displays more gifs
    $("#search").on("click", function () {
        var textSearch = $("#text-search").val().trim();
        gifs.push(textSearch)

        
        var searched = "https://api.giphy.com/v1/gifs/search?q=" + textSearch + "&api_key=FSyytIrzomRaLQisiLmXTgTFkxeIi72a&limit=3";

        $.ajax({
            url: searched,
            method: "GET"
        }).then(function (response) {

            var results = response.data;

            for (var i = 0; i < results.length; i++) {
                // var rating = $("<p>");
                // rating.text("Rated: " + results[i].rating.toUpperCase() + " |  Title: " + results[i].title);
                // rating.addClass("rating");
                var img = $("<img>").attr("src", results[i].images.fixed_width.url);
                // div.append(rating, img);
                // $("#gifs").append(div);

                var tr = $("<tr>")
                tr.append("<td>" + results[i].rating.toUpperCase() + "</td>");
                tr.append("<td>" + results[i].title + "</td>",);
                tr.append(img);
                $("#gif-append").append(tr);
            }
            

        });



        // clear the search box after click
        $("#text-search").val("");

        console.log(gifs);
        starterBTNs();
    });







    // gifs array starting buttons on page load
    starterBTNs();
}); // Document.ready





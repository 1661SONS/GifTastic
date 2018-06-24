// API key = nrnOysmPzPBWjJYThMdlRdiJzBtuJEJp
$(document).ready( function() {

    // api params to use
        // q, limit, and rating
    // make sure the query URL is using https
    // create a variable called topics to store an array of strings
    var topics = ['black panther', 'muhammad ali', 'atlanta falcons', 'atlanta hawks', 'atlanta braves', 'gta san andreas', 'jeep'];

    // for each topic in the topics array, 
    $.each(topics, function(index, value) {
        // create a button with its corresponding value as the button text
        $('.buttonsDiv').append('<button data=' + index + ' class="btn btn-outline-light">' + value);
    });
    
    // when a button is clicked
    $('.btn').on('click', function() {
        // grab the button's text and save it as a variable called topic
        var topic = $(this).text();
        console.log(topic);

        var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + topic + '&api_key=nrnOysmPzPBWjJYThMdlRdiJzBtuJEJp&limit=10&rating=PG-13&lang=en'

        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then( function(response) {

            console.log(response);

            var results = response.data;

            for (var i = 0; i < results.length; i++) {
                var gifsDiv = $('<div class="card border-warning"><img class="card-img-top" src='+ results[i].images.fixed_height.url +' alt="Card image cap"><div class="card-body"><h5 class="card-title">' + results[i].title + '</h5><p class="card-text">Rating: '+ results[i].rating +'</p><a href="#" class="btn btn-primary">Download</a></div></div>');
                var rating = $('<p class="text-warning">');
                $(rating).text(results[i].title + ' Rating: ' + results[i].rating);
                // var gifImage = $('<img>');
                // $(gifImage).attr('src', results[i].images.fixed_height.url);

                // console.log(results[i].images.fixed_height.url);
                // $(gifsDiv).prepend(rating);
                // $(gifsDiv).append(gifImage);
                $('.dump').prepend(gifsDiv);

                

               
            }

        // closing then function below
        });

        // when this button is clicked, GET the search query of the topic and respond with 10 gifs related to the topic - prepend these 10 gifs on the page
        // these gifs should be still on default but animate when clicked, then still when clicked again (toggle)
        // display the gif's rating under each one

    // allow the user to add their own topic button to append 10 gifs of their topic choice to the page (maybe prepend?)

    // BONUS // allow the user to download any gif with a one-click button

    // closing button click even handler below   
    });


















// closing ready function below
});
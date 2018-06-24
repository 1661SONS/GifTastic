// API key = nrnOysmPzPBWjJYThMdlRdiJzBtuJEJp
$(document).ready( function(){

    // api params to use
        // q, limit, and rating
    // make sure the query URL is using https
    // create a variable called topics to store an array of strings
        var topics = ['black panther', 'muhammad ali', 'atlanta falcons', 'atlanta hawks', 'atlanta braves', 'grand theft auto san andreas', 'jeep wrangler'];

        $.each(topics, function(index, value) {
            // for each topic in the topics array, create a button with its corresponding value as the button text
            $('.gifDiv').append('<button data=' + value + ' class="btn btn-outline-dark">' + value);
            // $('.btn').attr('data', value);
        });

        // $(this).on('click', function(){
        //     var topic = 
        // });







            

    

        var queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=nrnOysmPzPBWjJYThMdlRdiJzBtuJEJp&q=&limit=10&offset=0&rating=PG-13&lang=en'

        $.ajax({
            url: queryURL,
            method: 'GET'
        })

        .then( function(response) {
            console.log(response);

            var results = response.data;

        // closing then function below
        });

    // create a button for each topic in the array and append the button to the DOM
        // when this button is clicked, GET the search query of the topic and respond with 10 gifs related to the topic - prepend these 10 gifs on the page
        // these gifs should be still on default but animate when clicked, then still when clicked again (toggle)
        // display the gif's rating under each one

    // allow the user to add their own topic button to append 10 gifs of their topic choice to the page (maybe prepend?)

    // BONUS // allow the user to download any gif with a one-click button


















// closing ready function below
});
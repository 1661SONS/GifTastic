// API key = nrnOysmPzPBWjJYThMdlRdiJzBtuJEJp
$(document).ready( function() {

    // easter egg - display youtube video on link click
    $('.vidLink').on('click', function(){
        $('.youtube').append('<iframe width="560" height="349" src="https://www.youtube.com/embed/CBtKxsuGvko?rel=0&amp;start=48" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
    });

    // create a variable called topics to store an array of strings
    var topics = ['coming to america', 'dave chappelle', 'jurassic park', 'deadpool', 'lego batman', 'the office', 'atlanta', 'back to the future'];

    // for each topic in the topics array, 
    $.each(topics, function(index, value) {
        // create a button with its corresponding value as the button text
        $('.buttonsDiv').append('<button data=' + index + ' class="btn btn-outline-dark generateGifButton">' + value);
    });    
    
    // when one of the array buttons is clicked
    $('.generateGifButton').on('click', function() {
        
        // set the text of the button to the topic in the search query
        var topic = $(this).text();
          
        // using the topic above as the giphy search query
        var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + topic + '&api_key=nrnOysmPzPBWjJYThMdlRdiJzBtuJEJp&limit=10&rating=PG-13&lang=en'

        // getting the API response data
        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then( function(response) {
            console.log(response);
            
            // saving the respose data in a variable
            var results = response.data;

            // looping thru each result to later manipulate its data
            for (var i = 0; i < results.length; i++) {
                
                // creating a nice boostrap image card with button to hold each gif
                var gifsDiv = $('<div class="card border-dark"><img class="card-img-top" src='+ results[i].images.fixed_height.url +' alt="gif caption"><div class="card-body text-dark"><h5 class="card-title">' + results[i].title + '</h5><p class="card-text">Rating: '+ results[i].rating +'</p><a href="#" class="btn btn-outline-primary">download</a></div></div>');
               
                // prepending each gif card to the DOM
                $('.dump').prepend(gifsDiv);
               
                // these gifs should be still on default but animate when clicked, then still when clicked again (toggle)

            } // closing for loop

        }); // closing then function
      
    }); // closing generateGifButton click even handler


    // when the add gifs button is clicked
    $('.addGifsButton').on('click', function() {
        
        // set the user's input to the topic in the search query
        var userTopic = $('#searchInput').val();
        console.log(userTopic);
        
        // repeat the same stuff done for the array buttons
        var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + userTopic + '&api_key=nrnOysmPzPBWjJYThMdlRdiJzBtuJEJp&limit=10&rating=PG-13&lang=en'

        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then( function(response) {
            var results = response.data;

            for (var i = 0; i < results.length; i++) {
                
                var gifsDiv = $('<div class="card border-dark"><img class="card-img-top" src='+ results[i].images.fixed_height.url +' alt="gif caption"><div class="card-body text-dark"><h5 class="card-title">' + results[i].title + '</h5><p class="card-text">Rating: '+ results[i].rating +'</p><a href="#" class="btn btn-outline-primary">download</a></div></div>');
               
                $('.dump').prepend(gifsDiv);

                // when a gif is clicked
    // why tf isn't this working
    $('.card').on('click', function() {
        console.log('clicked');
        // $('.card-img-top').remove('<img>');
        // $('<img>').attr('src', results[i].images.fixed_height.url);
    });
                
            } // closing for loop

        }); // closing then function

    }); // closing addGifsButton click event handler    

    $('#clearGifs').on('click', function() {
        $('.dump').empty();
        $('#searchInput').val('');
    });

    

}); // closing ready function

// this code is not DRY, but it works
// these gifs should be still on default but animate when clicked, then still when clicked again (toggle)
// BONUS // allow the user to download any gif with a one-click button



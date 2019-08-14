var topics = ["dog", "cat", "zebra", "horse", "monkey", "gorilla", "fish", "seal", "sea lion",
"snake", "rabbit", "coyote", "duck", "bird", "shark", "frog", "marsupial", "thylacine", "wolf", "bear",
"elephant"]

for (var i = 0; i < topics.length; i++) { 
    var buttons = $('<button>'+ topics[i] + '</button>') 
    buttons.appendTo('#topics'); 
}         

// creates a click function for clicking the buttons
        $(document).ready(function() {
            $("#submitweather").click(function(){
                            console.log('search...')
                            // creating a variable for search term
                var topic = $("#topic").val();
        
                // if the city value is not blank, run ajax call to request information from the server
                if(topic !==''){
                  
                // ajax call
                                $.ajax({
                                    url: "https://api.giphy.com/v1/gifs/" + topic + "?api_key=qs2bKebUVChguz65nBpVv6CbyYU8EYH6&tag",
                                    type: 'GET',
                                    dataType: "jsonp",
                                    success: function(data){
                                        console.log(data)
                                    }
                                })
                // display an error if form submitted blank
                            }else{
                                $("#error").html('Field cannot be empty');
                            }
                
                        });
                    });
        
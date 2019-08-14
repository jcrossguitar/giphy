
        // creates a click function for submitting the search
        $(document).ready(function() {
            $("#submitWeather").click(function(){
                            console.log('search...')
                            // creating a variable for search term
                var city = $("#search").val();
        
                // if the city value is not blank, run ajax call to request information from the server
                if(city !==''){
                  
                // ajax call
                                $.ajax({
                                    // url: "http://api.openweathermap.org/data/2.5/weather?q={london}&APPID=d4fd3719101afa0124c6ea3df4c057b5",
        
        
                                    url: "https://api.giphy.com/v1/gifs/random?api_key=qs2bKebUVChguz65nBpVv6CbyYU8EYH6&tag=&rating=R",
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
        
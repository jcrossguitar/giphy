$(document).ready(function() {

var topics = ["dog", "cat", "zebra", "horse", "monkey", "gorilla", "fish", "seal", "sea lion",
"snake", "rabbit", "coyote", "duck", "bird", "shark", "frog", "marsupial", "thylacine", "wolf", "bear",
"elephant"];
// ADDED THIS FORLOOP AND FUNCTION FROM SOLUTIONS
function populateButtons(arrayToUse, classToAdd, areaToAddTo) {
    $(areaToAddTo).empty();

    for (var i = 0; i < arrayToUse.length; i++) {
        var a = $("<button class='srchBtn'>");
        a.addClass(classToAdd);
        a.attr("data-type", arrayToUse[i]);
        a.text(arrayToUse[i]);
        $(areaToAddTo).append(a);
      }
  
    }


// this area creates a for loop that adds buttons for each "topics" value
// for (var i = 0; i < topics.length; i++) { 
//     var buttons = $('<button>'+ topics[i] + '</button>') 
//     buttons.appendTo('#topics'); 
// } 

var createRow = function(data) {
    // Create a new table row element
    var tRow = $("<tr>");
    // Methods run on jQuery selectors return the selector they we run on
    // This is why we can create and save a reference to a td in the same statement we update its text
    var titleTd = $("<td>").text(data);
    // Append the newly created table data to the table row
    tRow.append(titleTd);
    // Append the table row to the table body
    $("tbody").append(tRow);
  };



// creates a click function for clicking the buttons
$(document).ready(function() {
  
    $('.srchBtn').click(function(){
                    console.log('search...')
                            // creating a variable for search term
        var topic = $(this).attr('data-type');
        console.log(topic)

        var xhr = $.get("https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=qs2bKebUVChguz65nBpVv6CbyYU8EYH6&limit=10");
                 
            xhr.done(function(data) { console.log("success got data", data); }) 
            .then(function(response) {
                var results = response.data;
                // createRow(response);
                //this area i took from the solutions because the way i was attempting was not working. 
                for (var i = 0; i < results.length; i++) {
                    var animals = $("<div class=\"animal-item\">");
                    
                    var rating = results[i].rating;

                    var p = $("<p>").text("Rating: " + rating);

                    var animated = results[i].images.fixed_height.url;
                    var still = results[i].images.fixed_height_still.url;

                    var animalImage = $("<img>");
                    animalImage.attr("src", still);
                    animalImage.attr("data-still", still);
                    animalImage.attr("data-animate", animated);
                    animalImage.attr("data-state", "still");
                    animalImage.addClass("animal-image");

                    animals.append(p);
                    animals.append(animalImage);

                    $("#show").append(animals);


            }
        });
                 
                            // this area is my function for creating buttons, but is not working at the moment
                            // function myFunction() {
                            //     var btn = document.createElement("#topics");
                            //     btn.innerHTML = "";
                            //     document.body.appendChild(buttons);
                            //   }
                
    });
});


  // this area uses the api to search based on the term input into the search. an object has been captured by clicking the search button

$(document).ready(function() {
    $("#inputBtn").click(function(){
                    console.log('search...')
                            // creating a variable for search term
        var search = $("#topic").val();
             // this area is my function for creating buttons, but is not working at the moment
            // $("#inputBtn").click(function myFunction() {
            //     var btn = document.getElementById(search);
            //     search.innerHTML = "";
            //     document.body.appendChild("#topics")
            // });
        

        var xhr = $.get("https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=qs2bKebUVChguz65nBpVv6CbyYU8EYH6&limit=10");
            xhr.done(function(data) { console.log("success got data", data); })
            .then(function(response) {
                
        
            });
                 

                
                });
            });
// ADDED THIS AREA FROM SOLUTIONS

            $(document).on("click", ".animal-image", function() {

                var state = $(this).attr("data-state");
            
                if (state === "still") {
                  $(this).attr("src", $(this).attr("data-animate"));
                  $(this).attr("data-state", "animate");
                }
                else {
                  $(this).attr("src", $(this).attr("data-still"));
                  $(this).attr("data-state", "still");
                }
              });
            
              $("#inputBtn").on("click", function(event) {
                event.preventDefault();
                var newAnimal = $("input").eq(0).val();
            
                if (newAnimal.length > 2) {
                  topics.push(newAnimal);
                }
            
                populateButtons(topics, "animal-button", "#topics");
            
              });
            
              populateButtons(topics, "animal-button", "#topics");
            });            
        
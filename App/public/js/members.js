// called at memebers.html
// **** members.js ****
// =====================================================================================


// Document ready | jQuery shorthand w/ 'use strict' to prevent bad code
// -------------------------------------------------------------------------------------
"use strict";
$(function() {
var user;
var user_id;

    $.get("/api/user_data").then(function(data) {
      console.log("here!")
        $(".member-name").text(data.username);
         user = data.username
         user_id = data.id
        // startSlide(event);
      });

    // Setup Global Variables 
    // -------------------------------------------------------------------------------------

    // Setup Swipe / Carousel Function 
    // -------------------------------------------------------------------------------------
    $('.autoplay').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        swipe: true,
        swipeToSlide: true,
        dots: false,
        arrows: false
    });

    // Mouse events *hover (to reveal mood/valence description to users); *click to log mood
    // -------------------------------------------------------------------------------------

   
    $('.pixel').hover(function() {
        $(this).find('.valence').fadeIn(300);
    },
    function() {
        $(this).find('.valence').fadeOut(1000);
    });
    

    $(".pixel").on("click", function() {
         // event.preventDefault();
        var date = new Date();
        var mood_id = $(this).attr("data-mood");
        var color = $(this).attr("data-color");
        var DimMoodId = $(this).attr("data_mood_id")
 
        var userData = {
          mood_id: mood_id,
          color: color,
          mood_date: date,
          DimMoodId: DimMoodId
        };

        
        // ^^^^^^^ ADD MOMENT.JS TO RESTRICT USERS TO DAILY USE !!!!
        // __________________________________________________________


        // If we have an username and password we run the loginUser function and clear the form
        logDailyMood(user_id, userData.mood_id, userData.color, userData.mood_date, userData.DimMoodId);
        
      });

      // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
      function logDailyMood(user_id, mood_id, color, date, DimMoodId) {
        $.post("/api/dailymoods", {
          user_id: user_id,
          mood_id: mood_id,
          color: color,
          mood_date: date,
          DimMoodId: DimMoodId

        }).then(function(data) {
          window.location.replace(data);
          // If there's an error, log the error
        }).catch(function(err) {
          console.log(err);
        });
      }// do no delete (startSlide)


}); // *** END ***
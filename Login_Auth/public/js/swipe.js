// Document ready | jQuery shorthand w/ 'use strict'
// =====================================================================================
"use strict";
$(function() {
    $(".valence").hide();
    // Setup Global Variables 
    // -------------------------------------------------------------------------------------
    var state, pos, neg, x, y, valence, currentMood, currentColor, valencePixel, posPixel, negPixel;
    var date = new Date();
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
    // $(".slick-arrow").hide();
    // Mouse events
    // -------------------------------------------------------------------------------------
    $('.pixel').hover(function() {
        $(this).find('.valence').fadeIn(300);
    }, function() {
        $(this).find('.valence').fadeOut(1000);
    });
    $(".pixel").click(function(event) {
        state = $(this).attr('id');
        x = $(this).attr('data-pos');
        y = $(this).attr('data-neg');
        pos = $(this).attr("data-state-p");
        neg = $(this).attr("data-state-n");
        pixelSplit(state, x, y, pos, neg);
    });
    var pixelSplit = function(state, x, y, pos, neg) {
        // $(".pixel").hide();
        // valencePixel = $("<div class='valencePixel'>");
        // $(".slide").prepend(valencePixel);
        // posPixel = $("<button class='pix' type='button'>").css({
        //     background: x
        // }).attr('id', x).attr("data-mood", pos).html($("<span>").text(pos));
       
        // negPixel = $("<button class='pix' type='button'>").css({
        //     background: y
        // }).attr('id', x).attr("data-mood", neg).html($("<span>").text(neg));
        // $(".valencePixel").append(posPixel).append(negPixel);
        

        $(".pixel").on("click", (function(event) {
            currentColor = $(this).attr('id');
            currentMood = $(this).attr('data-mood');
            alert(currentMood);
            console.log(" COLOR: " + currentColor + " MOOD: " + currentMood + " : " + date);
            console.log("Current Mood: " + currentMood);
            $(".valencePixel").hide();
            $(".pixel").show().delay(50);
        }));
    };
}); // EXIT
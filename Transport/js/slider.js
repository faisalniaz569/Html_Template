/* Slider */
/* jslint browser: true */
/* global document, setTimeout */

var document, setTimeout;

(function () {
    "use strict";

    var slideIndex = 0;

    function showSlides() {
        var i, slides, dots;
        slides = document.getElementsByClassName("mySlides");
        dots = document.getElementsByClassName("dot");

        for (i = 0; i < slides.length; i += 1) {
            slides[i].style.display = "none";
        }

        slideIndex += 1;

        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        for (i = 0; i < dots.length; i += 1) {
            dots[i].className = dots[i].className.replace(" slideractive", "");
        }

        if (slides[slideIndex - 1]) {
            slides[slideIndex - 1].style.display = "block";
        }

        if (dots[slideIndex - 1]) {
            dots[slideIndex - 1].className += " slideractive";
        }

        setTimeout(showSlides, 2000);
    }

    showSlides();
}());

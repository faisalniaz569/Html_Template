/* Quote Slide */
/* jslint browser: true */
/* global document, setTimeout, window */

var document, setTimeout, window;

(function () {
    "use strict";

    var slideIndex = 0;

    function showSlides() {
        var i, slides, dots;
        slides = document.getElementsByClassName("quoteSlides");
        dots = document.getElementsByClassName("dotround");

        for (i = 0; i < slides.length; i += 1) {
            slides[i].style.display = "none";
        }

        slideIndex += 1;

        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        for (i = 0; i < dots.length; i += 1) {
            dots[i].className = dots[i].className.replace(" quoteactive", "");
        }

        if (slides[slideIndex - 1]) {
            slides[slideIndex - 1].style.display = "block";
        }

        if (dots[slideIndex - 1]) {
            dots[slideIndex - 1].className += " quoteactive";
        }

        setTimeout(showSlides, 2000);
    }

    // Manual navigation
    function plusSlides(n) {
        slideIndex += (n - 1);
        if (slideIndex < 0) {
            slideIndex = 0;
        }
        showSlides();
    }

    function currentSlide(n) {
        slideIndex = n - 1;
        showSlides();
    }

    // Expose functions to global scope for onclick handlers
    window.plusSlides = plusSlides;
    window.currentSlide = currentSlide;

    // Start slideshow
    showSlides();
}());

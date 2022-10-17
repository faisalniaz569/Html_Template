// mySlides
var i, slides, dots;

$(function() {
  slideIndex = 0;
  showSlides();

  function showSlides() {
    'use strict';

    slides = document.getElementsByClassName("mySlides");
    dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i += 1) {
      slides[i].style.display = "none";
    }
    slideIndex++;

    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    for (i = 0; i < dots.length; i += 1) {
      dots[i].className = dots[i].className.replace(" slideactive", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " slideactive";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }
});

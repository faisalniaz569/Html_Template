/* Accordion */
/* jslint browser: true */
/* global document */

var document;

(function () {
    "use strict";
    var acc, i;
    acc = document.getElementsByClassName("accordion");
    function toggleAccordion() {
        this.classList.toggle("accactive");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }

    for (i = 0; i < acc.length; i += 1) {
        acc[i].addEventListener("click", toggleAccordion);
    }
}());

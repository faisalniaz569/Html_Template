/* ES6: true */

/*jslint plusplus: true */

var document, i, $, acc, panel;

$(function () {
    'use strict';

    // menu Searchbar
    $(".fa-search").click(function () {
        $("#formsearchbar").fadeToggle(1000);
    });

    // accordion
    acc = document.getElementsByClassName("accordion");

    for (i = 0; i < acc.length; i += 1) {
        acc[i].addEventListener("click", function () {
            'use strict';
            this.classList.toggle("accactive");
            panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
});

// Tabs
function openCity(evt, cityName) {

  'use strict';
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i += 1) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i += 1) {
    tablinks[i].className = tablinks[i].className.replace(" tabactive", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " tabactive";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

"use strict";

var menuNav = document.getElementById('menu_nav');

var menuTrigger = document.getElementById('menu_trigger');

function menuToggle() {
  if (menuNav.style.display === "flex") {
  menu.Nav.style.display = "none";
  } else {
  menuNav.style.display = "flex";
  }
  console.log ("The menu has been toggled.")
}

menuTrigger.onclick = menuToggle;

window.onresize = function() {
  if (window.innerwidth >= 600) {
    menuNav.removeAttribute("style")
  } ;
}

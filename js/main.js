// select DOM items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");

const navItems = document.querySelectorAll(".nav-item");

// Set initial state of menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    // Set menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    // Set menu State
    showMenu = false;
  }
}
//textfadein
function scrollAppear() {
  var bio = document.querySelector(".bio");

  bio.classList.add("bio-appear");
}
window.addEventListener("load", scrollAppear);

//Change document title on blur
var message = "👀Hmmm...";
var original = document.title;

window.onblur = function() {
  document.title = message;
};
window.onfocus = function() {
  document.title = original;
};

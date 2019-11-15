const body = document.querySelector("body");
const headerLogo = document.querySelector(".header--logo");
const headerEnter = document.querySelector(".header__animation--enter");
const headerLink = document.querySelector(".header__animation--link");
const animateLineY = document.querySelector(".header__animation--lineY");
const animateLineX = document.querySelector(".header__animation--lineX");
const navCheckbox = document.querySelector(".navigation--toggle");
const navList = document.querySelector(".navigation__list");

// Events
window.addEventListener("load", () => {
  // Prevent animations to run before load
  body.classList.remove("preload");
  animateLineY.style.transform = "scaleY(38)";
  animateLineX.style.transform = "scaleX(70)";
  headerEnter.style.opacity = "1";
  headerLink.style.opacity = "1";
});

// NAVIGATION
navList.addEventListener("click", () => {
  navCheckbox.checked = false; //Uncheck the checkbox so the navigation close
});

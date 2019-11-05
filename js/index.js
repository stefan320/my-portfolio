const body = document.querySelector("body");
const headerLogo = document.querySelector(".header--logo");
const headerEnter = document.querySelector(".header__animation--enter");
const headerLink = document.querySelector(".header__animation--link");
const animateLineY = document.querySelector(".header__animation--lineY");
const animateLineX = document.querySelector(".header__animation--lineX");

// Events
window.addEventListener("load", () => {
  // Prevent animations to run before load
  body.classList.remove("preload");
  animateLineY.style.transform = "scaleY(76)";
  animateLineX.style.transform = "scaleX(75)";
  headerEnter.style.opacity = "1";
  headerLink.style.opacity = "1";
});

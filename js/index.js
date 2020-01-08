const body = document.querySelector("body");
const headerOverlay = document.getElementsByClassName("header__overlay")[0];
const headerEnter = document.querySelector(".header__animation--enter");
const headerLink = document.querySelector(".header__animation--link");
const animateLineY = document.querySelector(".header__animation--lineY");
const animateLineX = document.querySelector(".header__animation--lineX");
const navCheckbox = document.querySelector(".navigation--toggle");
const navList = document.querySelector(".navigation__list");
const footerText = document.querySelector(".footer__text");

// Events
// headerLogo.addEventListener("load", () => {
//   animateLineY.style.height = "15rem";
//   animateLineX.style.width = "15rem";

//   headerEnter.style.opacity = "1";
//   headerLink.style.opacity = "1";
// });

// window.addEventListener("load", () => {
//   body.classList.remove("preload");
//   console.log("loaded");
// });

const headerLogo = document.createElement("img");
headerLogo.src = "../assets/icons/logo.svg";
headerLogo.classList.add("header--logo");
headerLogo.alt = "Stefan Cutajar logo";

headerLogo.onload = function() {
  body.classList.remove("preload");
  headerOverlay.prepend(headerLogo);
  setTimeout(function() {
    animateLineY.style.height = "15rem";
    animateLineX.style.width = "15rem";

    headerEnter.style.opacity = "1";
    headerLink.style.opacity = "1";
    console.log("logo loaded");
  }, 700);
};

// NAVIGATION
navList.addEventListener("click", () => {
  navCheckbox.checked = false; //Uncheck the checkbox so the navigation close
});

//Footer Date
const getCurrentYear = () => {
  const date = new Date();
  const year = date.getFullYear();
  return year;
};

// Replace 2019 from footer in index.html to the current year
const printCurrentYear = () => {
  const footerStr = footerText.innerHTML.replace("2019", getCurrentYear());
  footerText.innerHTML = footerStr;
};

printCurrentYear();

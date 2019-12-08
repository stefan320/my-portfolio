const body = document.querySelector("body");
const headerLogo = document.querySelector(".header--logo");
const headerEnter = document.querySelector(".header__animation--enter");
const headerLink = document.querySelector(".header__animation--link");
const animateLineY = document.querySelector(".header__animation--lineY");
const animateLineX = document.querySelector(".header__animation--lineX");
const navCheckbox = document.querySelector(".navigation--toggle");
const navList = document.querySelector(".navigation__list");
const footerText = document.querySelector(".footer__text");

// Events
window.addEventListener("load", () => {
  // Prevent animations to run before load
  body.classList.remove("preload");
  animateLineY.style.height = "15rem";
  animateLineX.style.width = "15rem";

  headerEnter.style.opacity = "1";
  headerLink.style.opacity = "1";
});

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

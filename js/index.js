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

const headerLogo = document.createElement("img");
headerLogo.src = "../assets/icons/logo.svg";
headerLogo.classList.add("header--logo");
headerLogo.alt = "Stefan Cutajar logo";

headerLogo.onload = function () {
  body.classList.remove("preload");
  headerOverlay.prepend(headerLogo);
  setTimeout(function () {
    animateLineY.style.height = "15rem";
    animateLineX.style.width = "15rem";

    headerEnter.style.opacity = "1";
    headerLink.style.opacity = "1";
  }, 700);
};

// SCROLL TO TOP BUTTON
//Get the button:
const scrollToTopBtn = document.querySelector(".scroll-to-top");

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollToTopBtn.style.visibility = "visible";
    scrollToTopBtn.style.opacity = 1;
  } else {
    scrollToTopBtn.style.visibility = "hidden";
    scrollToTopBtn.style.opacity = 0;
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

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

// Replace 10019 from footer in index.html to the current year
const printCurrentYear = () => {
  const footerStr = footerText.innerHTML.replace("10019", getCurrentYear());
  footerText.innerHTML = footerStr;
};

printCurrentYear();

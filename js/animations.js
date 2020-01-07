AOS.init({
  delay: 250,
  duration: 500
});

//Projects

let container = document.querySelectorAll(".projects__links--container");
const visitLink = document.querySelectorAll("projects__links--visit");
const learnLink = document.querySelectorAll("projects__links--learn");
const backArrows = document.querySelectorAll(".projects__details--arrow");
const jmbOverlay = document.querySelector(".projects__overlay--jmb");

let projectSelection;

container = Array.from(container);

container.forEach(e => {
  e.addEventListener("click", ev => {
    projectSelection = ev.target.dataset.reference;
    document.getElementById(projectSelection).classList.add("d-none");

    //rotate the container to show the visit website element
    ev.target.parentNode.children[0].style.transform = "rotateX(-90deg)";
    ev.target.parentNode.children[0].style.opacity = "0";
    ev.target.parentNode.children[1].style.transform = "rotateX(0deg)";
    ev.target.parentNode.children[1].style.opacity = "1";
  });
});

backArrows.forEach((e, index) => {
  e.addEventListener("click", ev => {
    projectSelection = ev.target.dataset.reference;
    document.getElementById(projectSelection).classList.remove("d-none");

    //rotate the container to show the Project Details element
    container[index].children[0].style.transform = "rotateX(0deg)";
    container[index].children[0].style.opacity = "1";
    container[index].children[1].style.transform = "rotateX(-90deg)";
    container[index].children[1].style.opacity = "0";
  });
});

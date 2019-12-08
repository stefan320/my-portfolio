const prioritiesSection = document.getElementById("priorities");

window.addEventListener("resize", e => {
  console.log(prioritiesSection.childNodes);
});

AOS.init({
  delay: 200,
  duration: 450
});

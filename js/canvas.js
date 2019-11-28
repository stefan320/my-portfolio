const canvas = document.querySelector(".header--canvas");
const logo = document.querySelector(".logo");
const c = canvas.getContext("2d");

const defaultColor = "rgba(255,255,255, .4)";
const whiteGold = " #bba58e";
const defaultLineWidth = 0.5;
let mtx = 30; //MoveTo X Starting Value
let lty = 30; //Linto To Y Starting Value

const mouse = {
  x: undefined,
  y: undefined
};
var linesArray = [];
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Events
canvas.addEventListener("mousemove", e => {
  mouse.x = e.x;
  mouse.y = e.y;
});

canvas.addEventListener("mouseout", e => {
  mouse.x = undefined;
  mouse.y = undefined;
});

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

class Line {
  constructor(mtx, mty, ltx, lty, strokeStyle, lineWidth = defaultLineWidth) {
    this.mtx = mtx;
    this.mty = mty;
    this.ltx = ltx;
    this.lty = lty;
    this.strokeStyle = strokeStyle;
    this.lineWidth = lineWidth;
  }

  drawLine() {
    c.beginPath();
    c.moveTo(this.mtx, this.mty);
    c.lineTo(this.ltx, this.lty);
    c.lineWidth = this.lineWidth;
    c.strokeStyle = this.strokeStyle;
    c.stroke();
  }

  //Animation
  update() {
    if (
      mouse.x + mouse.y >= this.mtx - 10 &&
      mouse.x + mouse.y <= this.mtx + 10
    ) {
      this.lineWidth = 2;
      this.strokeStyle = whiteGold;
    } else {
      this.strokeStyle = defaultColor;
      this.lineWidth = defaultLineWidth;
    }
  }
}

const createLines = () => {
  linesArray = [];
  console.log("before");
  console.log(linesArray);

  for (let i = 0; i < 300; i++) {
    linesArray.push(new Line(mtx, 0, 0, lty, defaultColor));
    linesArray[i].drawLine();
    mtx += 30;
    lty += 30;
  }
};

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  // linesArray.forEach(el => {
  //   el.update();
  //   el.drawLine();
  // });

  // c.drawImage(
  //   logo,
  //   innerWidth / 2 - logo.width / 2,
  //   innerHeight / 2 - logo.height / 2
  // );

  // c.moveTo(
  //   innerWidth / 2 - logo.width / 2 + 30,
  //   innerHeight / 2 + logo.height / 2 + 20
  // );

  // c.lineTo(
  //   innerWidth / 2 - logo.width / 2 + 30,
  //   innerHeight / 2 + logo.height / 2 + 190
  // );

  // c.lineTo(
  //   innerWidth / 2 + logo.width / 2 - 50,
  //   innerHeight / 2 + logo.height / 2 + 190
  // );

  // c.lineWidth = 2.8;
  // c.stroke();
}
createLines();

setTimeout(function() {
  animate();
}, 3000);

// animate();

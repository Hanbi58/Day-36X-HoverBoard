function getRanCo() {
  return (
    "rgb" +
    "(" +
    (Math.floor(Math.random() * 255) +
      ", " +
      Math.floor(Math.random() * 255) +
      ", " +
      Math.floor(Math.random() * 255) +
      ")" +
      ";")
  );
}

function getColor() {
  return (
    "hsl(" +
    360 * Math.random() +
    "," +
    (85 + 99 * Math.random()) +
    "%," +
    50 +
    "%)"
  );
}

const container = document.querySelector(".container");
const root = document.documentElement;

function setColor() {
  root.style.setProperty("--randomco", getColor());
}

let innerh = "";
for (let i = 0; i < 126; i++) {
  innerh += '<div class="box" onmouseover=setColor()></div>';
}
container.innerHTML = innerh;

const boxes = document.querySelectorAll(".box");

// boxes.forEach((box) => {
//   box.addEventListener("mouseenter", () => {
//     const color = getColor();
//     box.style.backgroundColor = color;
//     box.style.boxShadow = `0 0 2px 2px ${color}`;
//   });
//   box.addEventListener("mouseleave", () => {
//     box.style.backgroundColor = "rgb(31, 31, 31)";
//     box.style.boxShadow = "none";
//   });
// });
// const root = document.documentElement;
// boxes.forEach((box) => {
//   box.addEventListener("mouseenter", () => {
//     const color = getColor();
//     root.style.setProperty("--randomco", color);
//   });
// });

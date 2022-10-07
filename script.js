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

for (let i = 0; i < 126; i++) {
  const box = document.createElement("div");
  box.classList.add("box");
  container.appendChild(box);
}

const boxes = document.querySelectorAll(".box");
let root = document.documentElement;
boxes.forEach((box) => {
  box.addEventListener("mouseenter", (e) => {
    const color = getColor();
    box.style.backgroundColor = color;
    box.style.boxShadow = `0px 0px 2px 2px ${color}`;

    // const randomColor = getRanCo();
    // console.log(randomColor);
    // root.style.setProperty("--randomc", "blue");
    // console.log(root.style.getPropertyValue("--randomc"));
  });
  box.addEventListener("mouseleave", () => {
    box.style.transition = "all 1s ease-in-out";
    box.style.backgroundColor = "rgb(31, 31, 31)";
    box.style.boxShadow = "none";
  });
});

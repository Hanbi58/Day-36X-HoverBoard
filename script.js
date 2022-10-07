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
// const root = document.documentElement;

for (let i = 0; i < 126; i++) {
  const box = document.createElement("div");
  box.classList.add("box");
  //   box.onmouseover = setColor;
  //   box.innerHTML = '<div class="box" onmouseover = setColor()></div>';

  container.appendChild(box);
}

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("mouseenter", () => {
    const color = getColor();
    box.style.backgroundColor = "none";
    box.style.transition = "none";
    box.style.backgroundColor = color;
    box.style.boxShadow = `0 0 2px 2px ${color}`;
  });
  box.addEventListener("mouseleave", () => {
    box.style.transition = "all 1s ease-in-out";
    box.style.backgroundColor = "rgb(31, 31, 31)";
    box.style.boxShadow = "none";
  });
});

const background = "rgb(239, 241, 245)";
const color = "rgb(33, 35, 44)";
const altColor = "rgb(108, 118, 147)";

const button = document.getElementById("dark-mode");
const body = document.querySelector("body");
const h1 = document.querySelectorAll("h1");
const h2 = document.querySelectorAll("h2");
const li = document.querySelectorAll("a");
const p = document.querySelectorAll("p");

// Dark - Light mode toogle
button.addEventListener("click", () => {
  // changes button from moon to sun
  button.classList.toggle("dark");
  button.classList.toggle("light");

  if (button.innerHTML === '<i class="fas fa-sun"></i>') {
    button.innerHTML = '<i class="fas fa-moon"></i>';
    h1.forEach((item) => {
      item.style.color = "white";
    });
    li.forEach((item) => {
      item.style.color = "rgb(193, 194, 198)";
    });
    body.style.background = "rgb(13, 19, 26)";
  } else {
    button.innerHTML = '<i class="fas fa-sun"></i>';
    h1.forEach((item) => {
      item.style.color = color;
    });
    li.forEach((item) => {
      item.style.color = altColor;
    });
    p.forEach((item) => {
      item.style.color = altColor;
    });
    body.style.background = background;
  }
});

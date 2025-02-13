const button = document.querySelector("button");
const body = document.querySelector("body");
const tekstBoks = document.querySelector(".tekst_boks");
const p = document.querySelector("p");

p.classList.add("hidden");

addEventListener("DOMContentLoaded", sideLoaded);

function sideLoaded() {
  button.classList.add("gradient_animation");

  button.addEventListener("animationend", changeBackgroundColor);
  body.addEventListener("mouseover", endAnimation);
  button.addEventListener("click", changeBackgroundColor);
}

function endAnimation() {
  button.style.animation = "none"; // Stopper animationen
  button.style.backgroundPosition = "left bottom"; // Sæt sluttilstanden manuelt
}

function changeBackgroundColor() {
  tekstBoks.remove();
  button.remove();
  p.classList.remove("hidden");
  body.style.setProperty("background-color", "brown");
}

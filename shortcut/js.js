const body = document.querySelector("body");

body.classList.add("start-col");

document.querySelector("button").addEventListener("click", klik);

function klik() {
  body.classList.toggle("other-color");
  console.log("klik");
}

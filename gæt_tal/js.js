"use strict";

const randomTal = Math.floor(Math.random() * 101);
console.log("Det random tal er:", randomTal);

Random();
function Random() {
  document.querySelector("button").addEventListener("click", tjekTal);

  function tjekTal() {
    const gæt = Number(document.querySelector("input").value);
    const feedback = document.querySelector(".feedback");
    console.log("Brugeren gæt er:", gæt);

    if (gæt === randomTal) {
      feedback.textContent = "FLOT! Du gættede det rigtige tal.";
      feedback.classList.add("animation");
    } else if (gæt < randomTal) {
      feedback.textContent = "Tallet er for lavt! Prøv igen.";
    } else {
      feedback.textContent = "Tallet er for højt! Prøv igen.";
    }
  }
}

"use strict";

const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

document.querySelector("button").addEventListener("click", switchWords);
let sentence = document.querySelector("p"); //Finder HTML-elementet <p>

function switchWords() {
  curseWords.forEach((word) => {
    sentence.innerHTML = sentence.innerHTML.split(word.bad).join(`<span>${word.good}</span>`); //Tekstindhold opdateres med split og join, for at udskifte ord
  });

  document.querySelector("button").addEventListener("click", allReadyRightWords);
  function allReadyRightWords() {
    document.querySelector("dialog").showModal();
  }
}

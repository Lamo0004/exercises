import { $ } from "../utils.js";

let min = 0;
let max = 100;
let attempts = 0;
let computerGuess;

//Fjerner alt andet end start spil-knappen
$(".knapper").classList.add("hidden");
$("p").classList.add("hidden");
$("button").addEventListener("click", startSpil);

function startSpil() {
  $(".knapper").classList.remove("hidden");
  $("p").classList.remove("hidden");
  $("button").classList.add("hidden");
  $(".start_overskrift").classList.add("hidden");

  computerGuess = Math.floor((max + min) / 2);
  $("h1").textContent = `Computeren gætter på: ${computerGuess}`;

  $(".hoej").addEventListener("click", tooHigh);
  $(".lav").addEventListener("click", tooLow);
  $(".rigtig").addEventListener("click", correct);
}

function tooHigh() {
  max = computerGuess + 1;
  newGuess();
}

function tooLow() {
  min = computerGuess + 1;
  newGuess();
}

function newGuess() {
  attempts++;
  computerGuess = Math.floor((max + min) / 2);
  $("h1").textContent = `Computeren gætter på: ${computerGuess}`;
}

function correct() {
  attempts++;
  $("h1").textContent = `Du tænkte på ${computerGuess}!!!!`;
  $("h2").textContent = `FEDT!!! Computeren brugte ${attempts} forsøg på at gætte rigtigt😝`;
}

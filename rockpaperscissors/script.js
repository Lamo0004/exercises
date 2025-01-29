"use strict";

let userGuess;
let computerGuess;
let result;

// KONSTANTER
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const buttons = document.querySelector("#buttons");

const winText = document.querySelector("#win");
const loseText = document.querySelector("#lose");
const drawText = document.querySelector("#draw");

// EVENTLISTENERS
rock.addEventListener("click", rockClicked);
paper.addEventListener("click", paperClicked);
scissors.addEventListener("click", scissorsClicked);

// FUNKTIONER
function rockClicked() {
  startGame("rock"); // når brugeren klikker på rock, startes spillet med "rock"
}
function paperClicked() {
  startGame("paper"); // når brugeren klikker på paper, startes spillet med "paper"
}
function scissorsClicked() {
  startGame("scissors"); // når brugeren klikker på saks, startes spillet med "sciossors"
}

// start spillet
function startGame(userChoice) {
  buttons.classList.add("disabled"); // deaktiver knapper

  userGuess = userChoice; // sætter / gemmer brugerens valg

  player1.classList.add("shake");
  player2.classList.add("shake");

  player1.addEventListener("animationend", endShake);
  player2.addEventListener("animationend", endShake);

  computerGuesses();
}

function computerGuesses() {
  const choices = ["rock", "paper", "scissors"];
  computerGuess = choices[Math.floor(Math.random() * 3)];
  console.log("computerens valg er:", computerGuess);
}

function endShake() {
  player1.classList.remove("shake");
  player2.classList.remove("shake");

  showResult(); // resultatet af spillet
}

// Vinderen bestemmes
// når return bliver kaldt, afsluttes funktionen, og den værdi, der står efter return, sendes tilbage til det sted, hvor funktionen blev kaldt

function winner() {
  // hvis begge vælger det samme, er det uafgjort
  if (userGuess === computerGuess) {
    return "draw";
  }

  // brugeren vinder
  else if ((userGuess === "rock" && computerGuess === "scissors") || (userGuess === "paper" && computerGuess === "rock") || (userGuess === "scissors" && computerGuess === "paper")) {
    return "user";
  }

  // computeren vinder
  else {
    return "computer";
  }
}

function showResult() {
  const result = winner();

  // skjuler alle resultater først
  winText.classList.add("hidden");
  loseText.classList.add("hidden");
  drawText.classList.add("hidden");

  // viser resultat
  if (result === "user") {
    winText.classList.remove("hidden");
  } else if (result === "computer") {
    loseText.classList.remove("hidden");
  } else {
    drawText.classList.remove("hidden");
  }

  // fjerner klasser (for at kunne spille igen)
  player1.classList.remove("rock", "paper", "scissors");
  player2.classList.remove("rock", "paper", "scissors");

  // opdater spillerens valg
  player1.classList.add(userGuess);
  player2.classList.add(computerGuess);

  // aktivérer knapperne igen så man kan spille igen
  buttons.classList.remove("disabled");
}

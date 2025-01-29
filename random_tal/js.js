"use strict";

Random();
function Random() {
  const randomTal = Math.floor(Math.random() * 101); //Floor runder ned
  console.log(randomTal);
  document.querySelector("h1").textContent = randomTal;
}

console.log("" - 1 + 0); //Bliver en string
console.log("" + 1 + 0); //Bliver en string
console.log(true + false); //Bliver en boolean
console.log(6 / "3"); //Bliver ?
console.log("2" * "3"); //Bliver ?
console.log(4 + 5 + "px"); //Bliver et number
console.log("$" + 4 + 5); //Bliver en string
console.log("4" - 2); //Bliver en string
console.log("4px" - 2); //Bliver en string
console.log(7 / 0); //Bliver et number
console.log(" -9 " + 5); //Bliver en string
console.log(" -9 " - 5); //Bliver en string
console.log(null + 1); //Bliver et objekt
console.log(undefined + 1); //Bliver undefined

const value = true;

if (" ") {
  console.log("Value is truely");
} else {
  console.log("Value is falsy");
}

console.log("0" == []);

sayHello("Laura");

function sayHello(firstName) {
  console.log(`Hello ${firstName}`);
}

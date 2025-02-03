"use strict";

// let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
// console.log(letters[4]);

// let newarr = letters;
// newarr[4] = "*";

// console.log(letters[4]);

// SPØRGSMÅL
// Hvad er forskellen på letters og newarr? Der er ingen forskel
// Hvordan ser hele letters arrayet ud før og efter ændringen til newarr?? De er ens
// Er det overhovedet muligt at ændre et af arrayene uden at ændre det andet? NEJ
// Hvorfor ikke? Man laver ikke en kopi, men to referencer til det samme array
// Hvad sker der, hvis du bruger const i stedet for let? Ingenting

let result;
const people = ["Harry", "Ron", "Hermione"];

// PRØV ARRAY METODER
result = people.push("Draco");
console.log("People:", people);
console.log("Result:", result);

result = people.pop("Draco");
console.log("People:", people);
console.log("Result:", result);

result = people.push("Neville");
console.log("People:", people);
console.log("Result:", result);

result = people.push("Luna");
console.log("People:", people);
console.log("Result:", result);

result = people.slice(0, 3);
console.log("People:", people);
console.log("Result:", result);

result = people.slice(1, 0, "Cho");
console.log("People:", people);
console.log("Result:", result);

people[1] = "Ginny";
console.log("People:", people);
console.log("Result:", result);

result = people.push("Fred", "George");
console.log("People:", people);
console.log("Result:", result);

result = people.indexOf("Fred");
console.log("People:", people);
console.log("Result:", result);

result = people.splice(result, 1);
console.log("People:", people);
console.log("Result:", result);

result = people.unshift("Fred");
console.log("People:", people);
console.log("Result:", result);

result = people.shift("Fred");
console.log("People:", people);
console.log("Result:", result);

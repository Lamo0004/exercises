"use strict";

function hire(person) {
  person.hired = true;
}

function fire(person) {
  person.hired = false;
}

function fireOrHire(action, person) {
  action(person);
}

const person3 = {
  firstName: "Harry",
  lastName: "Potter",
  hired: false,
};

const person4 = {
  firstName: "Fred",
  lastName: "Weasley",
  hired: false,
};

console.log("Person 3:", person3);
console.log("Person 4:", person4);

fireOrHire(fire, person3);
fireOrHire(hire, person4);

console.log("Person 3:", person3);
console.log("Person 4:", person4);

//

const people = ["Harry", "Ron", "Hermione", "Neville"];

function testParms(a, b, c, d) {
  console.log(`a:${a}, b:${b}, c:${c}, d:${d}`);
}

people.forEach(testParms);

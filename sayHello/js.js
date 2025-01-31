"use strict";

// const myName = "Laura";
// const firstName = "Martin";
// const lastName = "Jensen";

// sayHello(lastName, firstName);

// function sayHello(firstName) {
//   console.log(`Hello ${firstName}`);
// }

function greeting(firstname) {
  return `Hello ${firstname}`;
}

// const result = greeting("any name");
const txt = `Greeting is ${greeting("a name")}`;
console.log(txt);

// Eksperiment 1:
// Den console logger 'hello laura" (navnet som står i gåseøjne)

// Eksperiment 2:
// Den console logger 'hello any name" (navnet som står i gåseøjne)
// Den console logger 'hello any name" (navnet som står i gåseøjne)
// Parameteret er undefined – den console logger 'hello undefined"
// Den console logger hele strengen i konstanten
// Fungere på samme måde – argumentet/paramenteret skrives i parateserne

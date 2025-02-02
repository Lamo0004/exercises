// console.log("Scipt");

import { sayHi } from "./utils.js";
import { getRandomNumber } from "./utils.js";
import { $ } from "./utils.js";
import { $$ } from "./utils.js";

sayHi("Laura");

console.log(getRandomNumber(2));

$("h1").textContent = "Overskrift";

$$("h1").textContent = "Overskrift All";

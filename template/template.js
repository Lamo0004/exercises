const name = "Klaus";
const animalType = "dog";
const animalName = "Mona";

const length = name.length;

console.log(`My name is ${name}.\nI have a ${animalType} called ${animalName}.`);
console.log(`${name} is ${length} characters longs`);

const letter = name[2];
console.log(`The third letters in ${name} is ${letter}`);

///////// ØVELSE MED .length og [index] /////////
const longName = "Albus Percival Wulfric Brian Dumbledore";

// Hvad er det totale antal af karakterer inklusive mellemrum?
const len = longName.length;
console.log(`Det totale antal karakterer i ${longName} er ${len}`);

// Hvilken karakter er der på index 2?
const index2 = longName[2];
console.log(`Karakteren ${index2} er på index 2`);

// Hvilken karakter er der på index 6?
const index6 = longName[6];
console.log(`Karakteren ${index6} er på index 6`);

// Hvilket index har det første D i Dumbledore?
const indexD = longName.indexOf("D");
console.log(`Det første D i Dumbledore har index ${indexD}`);

// Hvilket index har sidste e i Dumbledore?
const indexE = longName.lastIndexOf("e");
console.log(`Det sidste e i Dumbledore har index ${indexE}`);

///////// ØVELSE MED .substring /////////
// Find ud hvilke værdier du behøver i .substring for at få disse resultater:
// "Albus"
const albus = longName.substring(0, 5);
console.log(albus);

// "Dumbledore" (kan du lave den med kun et parameter?)
const dumbledore = longName.substring(29);
console.log(dumbledore);

// "Wulfric"
const wulfric = longName.substring(15, 23);
console.log(wulfric);

// " Wulfric "
const wulfricMellemrum = longName.substring(14, 23);
console.log(`_${wulfricMellemrum}_`);

// "ian"
const ian = longName.substring(25, 29);
console.log(ian);

// "bus"
const bus = longName.substring(2, 5);
console.log(bus);

let objektNavn = {
  firstName: "Laura",
  age: 24,
  student: true,
};

console.log(`${objektNavn.firstName} er ${objektNavn.age}`);

// get a value
let name = objektNavn.firstName;
console.log("Navnet på objektet er:", name);

// get a value med brackets
let nameBrackets = objektNavn["firstName"];
console.log("Navnet på objektet er:", nameBrackets);

// Set a value
objektNavn.firstName = "Bob";
console.log("Nyt navn:", objektNavn.firstName);

// Set a value med brackets
objektNavn["firstName"] = "Kaj";
console.log("Nyt navn:", objektNavn["firstName"]);

// Bracket notation er smart fordi objekt kommentering kan gøres mere generisk
const propName = "age";
console.log("Age:", objektNavn[propName]);

// Tilføjelser af props
const person1 = {
  firstName: "Klaus",
  age: 59,
  student: false,
};

console.log(person1.lastName);

person1.lastName = "Mandal";
console.log("Lastname:", person1.lastName);
console.log("Person 1:", person1);

// Fjernelse af props
person1.lastName = undefined;
console.log("Lastname:", person1.lastName);
console.log("Person 1:", person1); //LastName er stadig i objektet som prop bare uden værdi

delete person1.lastName; //Sådan fjernes props rigtig fra objekter
console.log("Person 1:", person1);

//Deklarere på props
person1.age++;
console.log("Person 1:", person1);

// Objekt værdier sendes som reference
const person2 = person1; //Peger på samme objekt, derfor sker der ændringer i begge objekter
person2.firstName = "Bob";
console.log("Person1", person1);
console.log("Person2", person2);

//Sammenligning
const student1 = {
  firstName: "Harry",
  lastName: "Potter",
};
const student2 = {
  firstName: student1.firstname,
  lastName: student1.lastname,
};

// const student2 = student1;
if (student1 === student2) {
  console.log("De er ens");
} else {
  console.log("De er IKKE ens");
}

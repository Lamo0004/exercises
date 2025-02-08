const name = "lAuRa";

const firstLetterCap = name.substring(0, 1).toUpperCase().concat(name.substring(1).toLowerCase());

console.log(firstLetterCap);

// const str = "starter med småt";
// let firstLetter = str.charAt(0);
// let theRest = str.slice(1);
// let firstLetterCap = firstLetter.toUpperCase();
// let theRestLow = theRest.toLocaleLowerCase();
// console.log(firstLetterCap.concat(theRestLow));
//Expected "Starter med småt"

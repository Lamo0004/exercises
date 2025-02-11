// SEMI SPOILER ALERT PROFANITY PREP 1
let theText = "Jeg er en tekst hvor nogle ord skal skiftes ud med nogle andre ord";

// split & join
console.log(theText.split("ord").join("ting"));

// Replace all
console.log(theText.replaceAll("ord", "ting"));

// SEMI SPOILER ALERT PROFANITY PREP 2
let theText2 = "Jeg er en tekst der skal findes ord i";

console.log(theText2.includes("ord"));

// ======================================
const wordsToCheckFor = ["ord", "tekst"];
console.log(wordsToCheckFor.some((word) => ["ord", "hyp"].includes(word))); //.some returnere true, fordi mindst ét af ordene matcher

// ======================================
console.log(wordsToCheckFor.some((word) => theText2.includes(word)));

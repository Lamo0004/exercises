"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};

// Funktioner som ændre teksten manuelt – men IKKE dynamisk
// const daArray = texts.da.texts;
// const deArray = texts.de.texts;

// function showDa(daArray) {
//   daArray.forEach(({ text, location }) => {
//     const element = document.querySelector(location);
//     if (element) {
//       element.textContent = text;
//     }
//   });
// }
// showDa(daArray);

// function showDe(deArray) {
//   deArray.forEach(({ text, location }) => {
//     const element = document.querySelector(location);
//     if (element) {
//       element.textContent = text;
//     }
//   });
// }
// showDa(deArray);

// Function som skifter teksten baseret på valgte sprog
function switchLanguage(locale) {
  const selectedTexts = texts[locale].texts; // Henter den korrekte tekst for det valgte sprog

  selectedTexts.forEach(({ text, location }) => {
    //Gennemgår hver tekst og dens placering på siden
    const element = document.querySelector(location); //Finder HTML-elementet baseret på location
    element.textContent = text; // Tekstindhold opdateres
  });
}

// Lytter efter ændringer i sprogvælgeren (dropdown-menuen)
document.getElementById("language_switcher").addEventListener("change", (event) => {
  switchLanguage(event.target.value); // Kalder funktionen med det valgte sprog for at opdatere teksten på siden. Target referere til det element, man har klikket på.
});

// Sætter sprogen til dansk default
switchLanguage("da");

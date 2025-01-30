"use strict";

let firstName = "Laura";
let animalType = "dog";
let animalName = "Loui";

presentPet(animalName, animalType, firstName);

function presentPet(firstName, animalType, animalName) {
  firstName = "Anna";
  console.log(`My name is ${firstName}, I have a ${animalType} called ${animalName}`);
}

// NOTER OM FUNKTIONER & PARAMETRE
// FUNKTIONSERKLÆRING: laver funkionen, parametre mellem parentesen adskilt med komma.
// LOKALE VARIABLER: en variabel erklæret inde i en funktion er kun synlig inde i denne funktion.
// GLOBALE VARIABLER: funktionen har fuld adgang til den globale variabel. Globale variabler kan ændes i funktionen.
// PARAMETRE: pladsholder, videregiver data til funktionen. Den variabel, der er angivet inden for parentesen i funktionsdeklarationen.
// ARGUMENT: den værdi, der sendes til funktionen, når den kaldes – den faktiske værdi.

// KONKLUSION OM PARAMETRE
// Parametre er pladsholdere til inforamtion/data, som funktionen skal bruge – parametre skrives mellem parentesen adskilt med komma i funktionserklæringen.
// Den faktisk værdi (argumenter) af inforamtionen/dataen indskrives når man kalder funktionen.
// Når man kalder en funktion, skal parametrene angives i den rækkefølge, som de er defineret i funktionserklæringen – da JavaScript tildeler værdier baseret på denne rækkefølge.
// Parametre kan være variabler, string eller andre faste værdier. Variabler kan både defineres lokalt (inde i funktionen – mest rigtigt?) og globalt.

"use strict";

const theStoredTheme = localStorage.getItem("storedTheme"); //Konstant som læser aktuelle valg af tema
document.querySelector("body").dataset.theme = theStoredTheme; //Sætter det gemte tema når siden er loadet (åbnes)

//Vis den er forskellig for null (intet er valgt tidligere)
if (theStoredTheme !== null) {
  document.querySelector("body").dataset.theme = theStoredTheme; //Sætter tema til det rigtige til det rigtige
  document.querySelector("#theme_switcher").value = theStoredTheme; //Sætter select dropdown til det rigtige
}
document.querySelector("#theme_switcher").addEventListener("change", changeTheme); //Kalder funtion ved ændringer på select dropdown

function changeTheme() {
  const selectedTheme = document.querySelector("#theme_switcher").value; //Gemmer valget af tema i konstant
  document.querySelector("body").dataset.theme = selectedTheme; //Sætter det valgte tema på body

  localStorage.setItem("storedTheme", selectedTheme); //Gemmer aktuelle valg af tema
}

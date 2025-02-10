"use strict";

document.querySelector("#theme_switcher").addEventListener("change", changeTheme);

function changeTheme() {
  const selectedTheme = document.querySelector("#theme_switcher").value;
  console.log(selectedTheme);

  document.querySelector("body").dataset.theme = selectedTheme;
}

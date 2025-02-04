"use stricht";

// Opretter en konstant med vores array
const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

document.querySelector("button").addEventListener("click", lavSti);

function lavSti() {
  bc.forEach((element) => {
    //Looper over hvert element i arrayet
    const sidsteElement = bc[bc.length - 1].name; //Finder navnet sidste element i arrayet
    if (sidsteElement === element.name) {
      //Hvis sidste element har samme navn som elementet den looper over sker dette
      document.querySelector("ul").innerHTML += `/&nbsp<li>${element.name}&nbsp</li>`; //Udskriver elements navn i HTML
    } else {
      //Ellers sker dette
      document.querySelector("ul").innerHTML += `/&nbsp<li><a href="${element.link}">${element.name}&nbsp</a></li>`; //Udskriver elements navn og opretter link i HTML
    }
  });
}

// HTML-kode der undgår mellemrum: &nbsp

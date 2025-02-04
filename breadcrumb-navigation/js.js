"use stricht";

const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

document.querySelector("button").addEventListener("click", lavSti);

function lavSti() {
  bc.forEach((element) => {
    if (bc[bc.length - 1].name === element.name) {
      document.querySelector("ul").innerHTML += `/&nbsp<li>${element.name}&nbsp</li>`;
    } else {
      document.querySelector("ul").innerHTML += `/&nbsp<li><a href="${element.link}">${element.name}&nbsp</a></li>`;
    }
  });
}

// HTML-kode der undgår mellemrum: &nbsp

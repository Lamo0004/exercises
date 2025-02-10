const list = document.querySelector("ul");

const barArray = [];

setInterval(generateBars, 200); //Kalder funktionen hvert 1000 milisekundt

function generateBars() {
  const randomTal = Math.round(Math.random() * 100);
  barArray.push(randomTal); //Lægger det random tal til arrayet

  const li = document.createElement("li");
  li.style.setProperty("--height", randomTal);
  list.appendChild(li);

  console.log(barArray);

  if (barArray.length >= 20) {
    //Hvis længden af arrayet er mere end 20
    barArray.shift(); // Fjernes det første tal i arrayet
    list.removeChild(list.firstElementChild); //fjernes første barn fra listen (barene)
  }
}

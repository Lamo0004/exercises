const url = "https://kea-alt-del.dk/kata-distortion/";
const list = document.querySelector("ul");

function fetchQueueData() {
  fetch(url)
    .then((svar) => svar.json())
    .then((data) => {
      const queueValue = parseInt(data.inQueue, 10); //Sætter værdien og konverterer den fra string til number
      console.log(typeof queueValue, queueValue); //Console logger værdien og typen, for at sikre det er et tal
      updateQueueVisualization(queueValue);
    });
}

function updateQueueVisualization(queueValue) {
  const queueBar = document.querySelector(".queue-bar");
  const queueNumber = document.querySelector("p");
  const containerHeight = document.querySelector(".queue-container").offsetHeight; // Containerens højde

  const maxQueueValue = 25; // Maksimal værdi for queueValue (den værdi, der giver 100% højde i containeren)

  const queueHeight = (queueValue / maxQueueValue) * containerHeight; // Beregner højden for queue-bar, baseret på køens værdi
  queueBar.style.height = `${queueHeight}px`; //Sætter sjøjlens højde til det beregnede oven over

  queueNumber.textContent = queueValue; //Sætter værdien i <p> elementet

  // Søjlen skifter farve baseret på køstørrelse
  if (queueValue < 10) {
    queueBar.style.background = "#28a745"; // Grøn (under 10 i kø)
    queueNumber.style.color = "#28a745"; //Sætter også værdien i <p> elementet til samme farve
  } else if (queueValue < 20) {
    queueBar.style.background = "#ffc107"; // Gul (mellem 10 og 20 i kø)
    queueNumber.style.color = "#ffc107"; //Sætter også værdien i <p> elementet til samme farve
  } else {
    queueBar.style.background = "#dc3545"; // Rød (over 10 i kø)
    queueNumber.style.color = "#dc3545"; //Sætter også værdien i <p> elementet til samme farve
  }
}

// Kald funktionen første gang
fetchQueueData();

// Opsæt interval til at køre funktionen hver 10. sekund
setInterval(fetchQueueData, 10000);

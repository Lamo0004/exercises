const url = "https://kea-alt-del.dk/kata-distortion/";

function fetchQueueData() {
  fetch(url)
    .then((svar) => svar.json())
    .then((data) => {
      document.querySelector("p").textContent = data.inQueue;
    });
}

// Kald funktionen første gang
fetchQueueData();

// Opsæt interval til at køre funktionen hver 10. sekund
setInterval(fetchQueueData, 10000);

const body = document.querySelector("body");

body.addEventListener("mousemove", changeColor);

function changeColor(event) {
  const windowX = window.innerWidth; //Opdater vinduesbredde dynamisk
  const windowY = window.innerHeight; // Opdater vindueshøjde dynamisk

  let xValue = event.clientX; //Finder musens x-værdi
  let xValueProcent = (xValue / windowX) * 100; //Omregner til procent

  let yValue = event.clientY; //Finder musens y-værdi
  let yValueProcent = (yValue / windowX) * 100; //Omregner til procent

  //Ændre farve baseret på musens x- og y-værdier i procent
  let newColor = `hsl(120, ${yValueProcent}%, ${xValueProcent}%)`;
  body.style.setProperty("background", newColor);
}

const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

const tbodyPointer = document.querySelector("tbody");
const buttonSection = document.querySelector("section");

// Opretter knapper – ville være nemmere at lave i HTML, meeeeen det gjorde jeg ikke
const buttonAll = document.createElement("button"); // Laver knap element
buttonAll.innerText = "All Vehicles"; // Sætter tekstindhold
buttonSection.appendChild(buttonAll); // Tilføjer elementet (knappen)

const buttonEl = document.createElement("button"); // Laver knap element
buttonEl.innerText = "Electric vehicles"; // Sætter tekstindhold
buttonSection.appendChild(buttonEl); // Tilføjer elementet (knappen)

const buttonSeats = document.createElement("button"); // Laver knap element
buttonSeats.innerText = "Vehicles with more than 2 seats"; // Sætter tekstindhold
buttonSection.appendChild(buttonSeats); // Tilføjer elementet (knappen)

const buttonElJonas = document.createElement("button"); // Laver knap element
buttonElJonas.innerText = "Electric vehicles owned by Jonas"; // Sætter tekstindhold
buttonSection.appendChild(buttonElJonas); // Tilføjer elementet (knappen)

const buttonRugbrød = document.createElement("button"); // Laver knap element
buttonRugbrød.innerText = "Rugbrød vehicles with more than 1 seat"; // Sætter tekstindhold
buttonSection.appendChild(buttonRugbrød); // Tilføjer elementet (knappen)

//Eventlisteners
buttonAll.addEventListener("click", AllVehicles);
buttonEl.addEventListener("click", isElectric);
buttonSeats.addEventListener("click", isMoreThanTwoSeats);
buttonElJonas.addEventListener("click", isJonasElectric);
buttonRugbrød.addEventListener("click", isRugbrødMoreThanOneSeat);

function showTheseVehicles(arr) {
  tbodyPointer.innerHTML = "";
  arr.forEach((each) => {
    let stopValue;
    if (each.stops === undefined) {
      stopValue = "No stops";
    } else {
      stopValue = each.stops;
    }

    let electricValue;
    if (each.isElectric === true) {
      electricValue = "Yes";
    } else {
      electricValue = "No";
    }

    let tandemValue;
    if (each.isElectric === true) {
      tandemValue = "Yes";
    } else {
      tandemValue = "No";
    }

    let ownedByValue;
    if (each.ownedBy === undefined) {
      ownedByValue = "No owner";
    } else {
      ownedByValue = each.ownedBy;
    }

    tbodyPointer.innerHTML += `<tr>
  <td>${each.type}</td>
  <td>${each.fuel}</td>
  <td>${each.passengers}</td> 
  <td>${stopValue}</td>
  <td>${ownedByValue}</td>
  <td>${electricValue}</td>
  <td>${tandemValue}</td>
</tr>`;
  });
}

// Funktion der viser alle køretøjer
function AllVehicles() {
  showTheseVehicles(vehicles);
}

// Funktion der viser køretøjer på El
function onlyElectric(vehicles) {
  if (vehicles.isElectric === true) {
    return true;
  } else {
    return false;
  }
}
function isElectric() {
  const isElectric = vehicles.filter(onlyElectric);
  showTheseVehicles(isElectric);
}

// Kunne også have set sådan ud
// const onlyElectric = vehicles.filter((vehicles) => vehicles.isElectric);
// showTheseVehicles(onlyElectric);

// Funktion der viser alle fartøjer med mere end 2 sæder
function moreThanTwoSeats(vehicles) {
  if (vehicles.passengers > 2) {
    return true;
  } else {
    return false;
  }
}
function isMoreThanTwoSeats() {
  const isMoreThanTwoSeats = vehicles.filter(moreThanTwoSeats);
  showTheseVehicles(isMoreThanTwoSeats);
}

// Kunne også have set sådan ud
// const moreThanTwoSeats = vehicles.filter((vehicles) => vehicles.passengers > 2);
// showTheseVehicles(moreThanTwoSeats);

// Funktion der viser alle el-drevne fartøjer ejet af Jonas
function onlyJonasElectric(vehicles) {
  if (vehicles.isElectric === true && vehicles.ownedBy === "Jonas") {
    return true;
  } else {
    return false;
  }
}
function isJonasElectric() {
  const isJonasElectric = vehicles.filter(onlyJonasElectric);
  showTheseVehicles(isJonasElectric);
}

// Kunne også have set sådan ud
// const onlyJonasElectric = vehicles.filter((vehicles) => vehicles.isElectric && vehicles.ownedBy === "Jonas");
// showTheseVehicles(onlyJonasElectric);

// Funktion der viser alle rugbrøds drevne fartøjer med plads til mere end en
function onlyRugbrødMoreThanOneSeat(vehicles) {
  if (vehicles.fuel === "Rugbrød" && vehicles.passengers > 1) {
    return true;
  } else {
    return false;
  }
}
function isRugbrødMoreThanOneSeat() {
  const isRugbrødMoreThanOneSeat = vehicles.filter(onlyRugbrødMoreThanOneSeat);
  showTheseVehicles(isRugbrødMoreThanOneSeat);
}

// Kunne også have set sådan ud
// const onlyRugbrødMoreThanOneSeat = vehicles.filter((vehicles) => vehicles.fuel === "Rugbrød" && vehicles.passengers > 1);
// showTheseVehicles(onlyJonasElectric);

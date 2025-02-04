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
showTheseVehicles(vehicles);

function showTheseVehicles(arr) {
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${each.type}</td>
  <td>${each.fuel}</td>
  <td>${each.passengers}</td> 
  <td>${each.stops}</td>
  <td>${each.ownedBy}</td>
  <td>${each.isElectric}</td>
  <td>${each.isTandem}</td>
</tr>`;
  });
}

// Funktion der KUN viser køretøjer på El
function onlyElectric(vehicles) {
  if (vehicles.isElectric === true) {
    return true;
  } else {
    return false;
  }
}
const isElectric = vehicles.filter(onlyElectric);
console.log(isElectric);

// Funktion der viser alle fartøjer med mere end 2 sæder
function moreThanTwoSeats(vehicles) {
  if (vehicles.passengers >= 2) {
    return true;
  } else {
    return false;
  }
}
const isMoreThanTwoSeats = vehicles.filter(moreThanTwoSeats);
console.log(isMoreThanTwoSeats);

// Funktion der viser alle el-drevne fartøjer ejet af Jonas
function onlyJonasElectric(vehicles) {
  if (vehicles.isElectric === true && vehicles.ownedBy === "Jonas") {
    return true;
  } else {
    return false;
  }
}
const isJonasElectric = vehicles.filter(onlyJonasElectric);
console.log(isJonasElectric);

// Funktion der viser alle rugbrøds drevne fartøjer med plads til mere end en
function onlyRugbrødMoreThanOneSeat(vehicles) {
  if (vehicles.fuel === "Rugbrød" && vehicles.passengers >= 1) {
    return true;
  } else {
    return false;
  }
}
const isRugbrødMoreThanOneSeat = vehicles.filter(onlyRugbrødMoreThanOneSeat);
console.log(isRugbrødMoreThanOneSeat);

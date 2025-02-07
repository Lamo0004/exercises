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

// Filtreringer
const AllVehicles = vehicles;
const onlyElectric = vehicles.filter((vehicles) => vehicles.isElectric);
const moreThanTwoSeats = vehicles.filter((vehicles) => vehicles.passengers > 2);
const onlyJonasElectric = vehicles.filter((vehicles) => vehicles.isElectric && vehicles.ownedBy === "Jonas");
const onlyRugbrødMoreThanOneSeat = vehicles.filter((vehicles) => vehicles.fuel === "Rugbrød" && vehicles.passengers > 1);

function showTheseVehicles(arr) {
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${beautify(each.type)}</td>
  <td>${beautify(each.fuel)}</td>
  <td>${beautify(each.passengers)}</td> 
  <td>${beautify(each.stops)}</td>
  <td>${beautify(each.ownedBy)}</td>
  <td>${beautify(each.isElectric)}</td>
  <td>${beautify(each.isTandem)}</td>
</tr>`;
  });
}

// Switch funktion til at skrive andre værdier ud (i stedet for undefined og true) – i funktionen beautify, som er kaldt over
function beautify(str) {
  switch (str) {
    case undefined:
      str = "-";
      break;

    case true:
      str = "Yes";
      break;

    default:
      str = str;
  }
  return str;
}

// Looper over knapperne
document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => {
    //Kalder en anonym funktion med data filter (fra HTML) som parameter
    filterHandler(btn.dataset.filter);
  });
});

function filterHandler(filter) {
  let filterArray;

  switch (filter) {
    case "all":
      filterArray = AllVehicles;
      break;

    case "isElectric":
      filterArray = onlyElectric;
      break;

    case "moreThanOnePass":
      filterArray = moreThanTwoSeats;
      break;

    case "jonasOwnedElVeh":
      filterArray = onlyJonasElectric;
      break;

    case "ryebread":
      filterArray = onlyRugbrødMoreThanOneSeat;
      break;
  }
  showTheseVehicles(filterArray);
}

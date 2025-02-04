const animals = [
  { name: "Mandu", type: "cat" },
  { name: "Mia", type: "cat" },
  { name: "Mona", type: "dog" },
  { name: "Freddie", type: "dog" },
];

function all(animal) {
  return true;
}

function none(animal) {
  return false;
}

console.log("ALL:", animals.filter(all));
console.log("NONE:", animals.filter(none));

function isCat(animal) {
  if (animal.type === "cat") {
    return true;
  } else {
    return false;
  }
}
const onlyCats = animals.filter(isCat);
console.log("Kun katte:", onlyCats);

function isDog(animal) {
  if (animal.type === "dog") {
    return true;
  } else {
    return false;
  }
}
const onlyDogs = animals.filter(isDog);
console.log("Kun hunde:", onlyDogs);

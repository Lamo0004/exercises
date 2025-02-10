export function getRandomNumber(max) {
  return Math.floor(Math.random() * (max + 1)); //Kan blive 0, 1 og 2 når max nummeren er 2
}

export function $(selector) {
  return document.querySelector(selector);
}

export function $$(selector) {
  return document.querySelectorAll(selector);
}

// Dette kunne godt laves til hjælpefunktioner i utils.js
// const minUrl = "https://jsonplaceholder.typicode.com/posts";
// loadJSON(minUrl, prepareData);
// function loadJSON(url, callback) {
//   fetch(url)
//     .then((response) => response.json())
//     .then((jsonData) => callback(jsonData));
// }

// function prepareData(data) {
//   console.table(data);
//   data.forEach((element) => {
//     document.querySelector("body").innerHTML += `<h1>${element.title}</h1>`;
//   });
// }

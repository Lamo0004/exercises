export function getRandomNumber(max) {
  return Math.floor(Math.random() * (max + 1)); //Kan blive 0, 1 og 2 når max nummeren er 2
}

export function $(selector) {
  return document.querySelector(selector);
}

export function $$(selector) {
  return document.querySelectorAll(selector);
}

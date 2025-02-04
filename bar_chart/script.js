const list = document.querySelector("ul");

const barArray = [];

setInterval(generateBars, 1000);

function generateBars() {
  const randomTal = Math.round(Math.random() * 100);
  barArray.push(randomTal);

  const li = document.createElement("li");
  li.style.setProperty("--height", randomTal);
  list.appendChild(li);

  console.log(barArray);

  if (barArray.length >= 20) {
    barArray.shift();
  }

  if (list.children.length >= 20) {
    list.removeChild(list.children[0]);
  }
}

const goodbutton0 = document.getElementById("good-button1");
const displayItems0 = document.getElementById("display-items1");
const goodbutton1 = document.getElementById("good-button2");
const displayItems1 = document.getElementById("display-items2");
const goodbutton2 = document.getElementById("good-button3");
const displayItems2 = document.getElementById("display-items3");
const goodbutton3 = document.getElementById("good-button4");
const displayItems3 = document.getElementById("display-items4");

goodbutton0.onclick = function () {
  displayItems0.textContent += "👍";
  console.log("押したよ！");
};

goodbutton1.onclick = function () {
  displayItems1.textContent += "👍";
  console.log("押したよ！");
};

goodbutton2.onclick = function () {
  displayItems2.textContent += "👍";
  console.log("押したよ！");
};

goodbutton3.onclick = function () {
  displayItems3.textContent += "👍";
  console.log("押したよ！");
};

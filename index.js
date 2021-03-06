var randomNumber1 = Math.round((Math.random()*5)) + 1;

var image1Selector = "images/dice" + randomNumber1 + ".png";

document.querySelector(".dice .img1").setAttribute("src", image1Selector);

var randomNumber2 = Math.round((Math.random()*5)) + 1;

var image2Selector = "images/dice" + randomNumber2 + ".png";

document.querySelector(".dice .img2").setAttribute("src", image2Selector);


if (randomNumber1 > randomNumber2) {
  document.querySelector(".container h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector(".container h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector(".container h1").innerHTML = "Draw!";
}

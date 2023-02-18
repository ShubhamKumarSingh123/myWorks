var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "./dic" + randomNumber1 + ".png"; 

var randomImageSource = randomDiceImage; 

var image1 = document.querySelectorAll(".img1")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "./dic" + randomNumber2 + ".png";

document.querySelectorAll(".img1")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector(".head").innerHTML = "Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector(".head").innerHTML = "Player 2 Wins!";
}
else {
  document.querySelector(".head").innerHTML = "Draw!";
}
function rollTheDice(){
    setTimeout(() => {
        var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "./dic" + randomNumber1 + ".png"; 

var randomImageSource = randomDiceImage; 

var image1 = document.querySelectorAll(".img1")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "./dic" + randomNumber2 + ".png";

document.querySelectorAll(".img1")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector(".head").innerHTML = "Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector(".head").innerHTML = "Player 2 Wins!";
}
else {
  document.querySelector(".head").innerHTML = "Draw!";
}
        
    }, 0);
}

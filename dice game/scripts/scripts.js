
//Random 1-6 Generator
var randomNumber = Math.floor(Math.random() * 6) + 1;

//Picks random dice picture
var randomDice = "dice" + randomNumber + ".png";

var randomImageSource = "images/" + randomDice;

//first dice
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


//Random 1-6 Generator
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
//second dice
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//winner

if(randomNumber > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(randomNumber < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else if(randomNumber === randomNumber2){
  document.querySelector("h1").innerHTML = "It's a Draw!";
}
else{
    document.querySelector("h1").innerHTML = "Refresh";
}

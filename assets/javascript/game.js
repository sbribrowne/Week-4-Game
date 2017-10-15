$(document).ready(function(){

var totalScore = 0;
var totalScoreLog = 0;
var wins = 0;
var losses = 0;

var crystalOne = 5;
var crystalTwo = 2;
var crystalThree = 10;
var crystalFour = 1;

var randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);

$("#random").html("Random Number: " + randomNumber);

$("#ruby1").on("click", function () {
	totalScore = totalScore + crystalOne;
	console.log(totalScore);
});

$("#ruby2").on("click", function () {
	totalScore = totalScore + crystalTwo;
	console.log(totalScore);
});

$("#ruby3").on("click", function () {
	totalScore = totalScore + crystalThree;
	console.log(totalScore);
});

$("#ruby4").on("click", function () {
	totalScore = totalScore + crystalFour;
	console.log(totalScore);
});

if (totalScore === randomNumber) {
	wins++;
	alert("You Won");
	console.log("winner");
	reset();
} else if (totalScore > randomNumber) {
	losses++;
	alert("You Lost");
	console.log("loser");
	reset();
};

$("#playerscore").html("Your Score: " + totalScoreLog);

console.log(wins);
console.log(losses);

function reset() {
	totalScore = 0;
	crystalOne = [Math.floor(Math.random() * 10)];
	crystalTwo = [Math.floor(Math.random() * 10)];
	crystalThree = [Math.floor(Math.random() * 10)];
	crystalFour = [Math.floor(Math.random() * 10)];

};

});
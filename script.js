"use strict";

let score = 20;
let highscore = 0;
let secretNumber = Math.floor(Math.random() * 20) + 1;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (guess != 0 || !guess) {
    displayMessage("No number!");
  } else if (guess > 20 || guess < 1) {
    displayMessage("Choose number from 1 to 20");
  } else if (guess === secretNumber) {
    displayMessage("You guessed!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Lower" : "Higher");
      score--;
      displayScore(score);
    } else {
      displayMessage("End of Game");
      displayScore(0);
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector(".guess").value = "";
  displayScore(0);
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  displayMessage("Start guessing...");
  document.querySelector("body").style.backgroundColor = "#222";
});

"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector("#message").textContent = message;
};

document.querySelector("#check").addEventListener("click", function () {
  console.log(document.querySelector("#guess").value);
  const guess = Number(document.querySelector("#guess").value);

  if (!score) return;

  if (!guess) {
    displayMessage("No Number!");
  } else if (guess === secretNumber) {
    displayMessage("Correct Number!");
    document.querySelector("#number").textContent = secretNumber;

    // document.querySelector("body").style.backgroundColor = "#65a30d";
    // document.querySelector("#number").style.width = "320px";

    document.querySelector("body").classList.remove("bg-neutral-800");
    document.querySelector("body").classList.add("bg-lime-600");
    document.querySelector("#number").classList.remove("w-40");
    document.querySelector("#number").classList.add("w-80");

    if (score > highScore) {
      highScore = score;
      document.querySelector("#highScore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
    score--;
    document.querySelector("#score").textContent = score;
    if (score === 0) {
      displayMessage("You lost the game!");
    }
  }

  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector("#message").textContent = "Too high!";
  //     score--;
  //     document.querySelector("#score").textContent = score;
  //   } else {
  //     document.querySelector("#message").textContent = "You lost the game!";
  //     document.querySelector("#score").textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector("#message").textContent = "Too low!";
  //     score--;
  //     document.querySelector("#score").textContent = score;
  //   } else {
  //     document.querySelector("#message").textContent = "You lost the game!";
  //     document.querySelector("#score").textContent = 0;
  //   }
  // }
});

document.querySelector("#again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing...");

  document.querySelector("#number").textContent = "?";

  document.querySelector("body").classList.remove("bg-lime-600");
  document.querySelector("body").classList.add("bg-neutral-800");
  document.querySelector("#number").classList.remove("w-80");
  document.querySelector("#number").classList.add("w-40");

  document.querySelector("#guess").value = "";

  score = 20;
  document.querySelector("#score").textContent = score;
});

const btnRock = document.querySelector(".rock--button");
const btnPaper = document.querySelector(".paper--button");
const btnScissors = document.querySelector(".scissors-button");
const interface = document.querySelector(".interface");
const resultText = document.querySelector(".result--text");
const scoreText = document.querySelectorAll(".score--text");
const humanScoreText = document.querySelector(".human--score");
const pcScoreText = document.querySelector(".computer--score--text");
const humScoreText = document.querySelector(".human--score--text");

const computerText = document.querySelector(".computer--text");
// computerText.textContent = ``;
const humanText = document.querySelector(".human--text");
// humanText.textContent = ``;

const choiceTexts = document.querySelectorAll(".choice");
// choiceTexts.forEach((el) => (el.classList.remove = "shake"));

const pcChoice = document.querySelector(".computer--choice--text");
const humChoiceTxt = document.querySelector(".human--choice--text");

let humanScore = 0;
let computerScore = 0;
const choices = ["✊", "✋", "✌"];

const computerChoice = function () {
  const num = Math.trunc(Math.random() * 3);
  const choice = choices[num];
  //   console.log(choice);
  return choice;
};

const tie = "Draw";
const win = "You won";
const lose = "You lose";
let result = "";
let pcScore = 0;
let humScore = 0;

interface.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn")) {
    scoreText.forEach((el) => {
      el.style.opacity = 1;
    });
    choiceTexts.forEach((el) => {
      el.textContent = "✊";
      el.classList.add("shake");
    });
    const shakeWatcher = document.querySelector(".shake");
    shakeWatcher.addEventListener("animationend", (e) => {
      pcChoice.textContent = compChoice;
      humChoiceTxt.textContent = humChoice;
      choiceTexts.forEach((el) => {
        el.classList.remove("shake");
      });
      resultText.textContent = `${result}`;
      humScoreText.textContent = humScore;
      pcScoreText.textContent = pcScore;
      console.log(`Animation has ended`);
    });
    const compChoice = computerChoice();
    console.log(`PC: ${compChoice}`);
    const humChoice = e.target.textContent;
    console.log(`You: ${humChoice}`);

    if (humChoice === compChoice) {
      result = tie;
      console.log(`Draw`);
    } else if (humChoice === "✊" && compChoice === "✋") {
      result = lose;
      pcScore++;
      console.log(`Computer wins`);
    } else if (humChoice === "✋" && compChoice === "✊") {
      result = win;
      humScore++;
      console.log(`Human wins`);
    } else if (humChoice === "✌" && compChoice === "✋") {
      result = win;
      humScore++;
      console.log(`Human wins`);
    } else if (humChoice === "✊" && compChoice === "✌") {
      result = win;
      humScore++;
      console.log(`Human wins`);
    } else if (humChoice === "✋" && compChoice === "✌") {
      result = lose;
      pcScore++;
      console.log("Computer wins");
    } else if (humChoice === "✌" && compChoice === "✊") {
      result = lose;
      pcScore++;
      console.log(`Computer wins`);
    }
  }
});

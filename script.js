const btnRock = document.querySelector(".rock--button");
const btnPaper = document.querySelector(".paper--button");
const btnScissors = document.querySelector(".scissors-button");
const interface = document.querySelector(".interface");
const resultText = document.querySelector(".result--text");

const computerText = document.querySelector(".computer--text");
computerText.textContent = ``;
const humanText = document.querySelector(".human--text");
humanText.textContent = ``;

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

interface.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn")) {
    choiceTexts.forEach((el) => {
      el.textContent = "✊";
      el.classList.add("shake");
    });
    const compChoice = computerChoice();
    console.log(`PC: ${compChoice}`);
    const humChoice = e.target.textContent;
    console.log(`You: ${humChoice}`);

    setTimeout(() => {
      pcChoice.textContent = compChoice;
      humChoiceTxt.textContent = humChoice;
      choiceTexts.forEach((el) => {
        el.classList.remove("shake");
      });
    }, 1600);

    // if (e.target.classList.contains("rock--button")) {
    //   humChoiceTxt.textContent = "✊";
    //   //   console.log(`Rock`);
    // } else if (e.target.classList.contains("paper--button")) {
    //   humChoiceTxt.textContent = "✋";
    //   //   console.log(`Paper`);
    // } else {
    //   humChoiceTxt.textContent = "✌";
    //   //   console.log(`Scissors`);
    // }

    if (humChoice === compChoice) {
      result = tie;
      console.log(`Draw`);
    } else if (humChoice === "✊" && compChoice === "✋") {
      result = lose;
      console.log(`Computer wins`);
    } else if (humChoice === "✋" && compChoice === "✊") {
      result = win;
      console.log(`Human wins`);
    } else if (humChoice === "✌" && compChoice === "✋") {
      result = win;
      console.log(`Human wins`);
    } else if (humChoice === "✊" && compChoice === "✌") {
      result = win;
      console.log(`Human wins`);
    } else if (humChoice === "✋" && compChoice === "✌") {
      result = lose;
      console.log("Computer wins");
    } else if (humChoice === "✌" && compChoice === "✊") {
      result = lose;
      console.log(`Computer wins`);
    }
    setTimeout(() => {
      resultText.textContent = `${result}`;
    }, 1800);
  }
});

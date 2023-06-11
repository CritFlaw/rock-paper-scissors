const btnRock = document.querySelector(".rock--button");
const btnPaper = document.querySelector(".paper--button");
const btnScissors = document.querySelector(".scissors-button");
const interface = document.querySelector(".interface");
const resultText = document.querySelector(".result--text");
const scoreText = document.querySelectorAll(".score--text");
const humanScoreText = document.querySelector(".human--score");
const pcScoreText = document.querySelector(".computer--score--text");
const humScoreText = document.querySelector(".human--score--text");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".result--modal");
const resultTextModal = document.querySelector(".result--modal--text");
const modalBtns = document.querySelectorAll(".modal--buttons");
const modalBtnsContainer = document.querySelector(".game--over--options");

modalBtnsContainer.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("modal--buttons")) {
    if (e.target.classList.contains("yes--please")) {
    } else if (e.target.classList.contains("no--im--good")) {
      console.log(`No I'm good`);
      console.log(e.target.classList);
      overlay.classList.add("hidden");
      overlay.classList.remove("shown");
      modal.classList.add("hidden");
      modal.classList.remove("shown");
    }
  }
});

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
let winner = "";
let result = "";
let pcScore = 0;
let humScore = 0;
let gameOverState = false;

interface.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn")) {
    scoreText.forEach((el) => {
      if ((el.style.opacity = " ")) el.style.opacity = 1;
    });
    const [hum, pc] = choiceTexts;
    choiceTexts.forEach((el) => {
      el.textContent = "✊";
      // el.classList.add("shake");
    });
    hum.classList.add("shake--hum");
    pc.classList.add("shake--pc");
    const shakeWatcher = document.querySelector(".shake--hum");
    shakeWatcher.addEventListener("animationend", (e) => {
      pcChoice.textContent = compChoice;
      humChoiceTxt.textContent = humChoice;
      hum.classList.remove("shake--hum");
      pc.classList.remove("shake--pc");
      // choiceTexts.forEach((el) => {
      //   el.classList.remove("shake");
      // });
      humScoreText.textContent = humScore;
      pcScoreText.textContent = pcScore;
      if (gameOverState === true) {
        console.log(`Overlay should come on`);
        resultText.textContent = `Game over, ${winner} wins`;
        overlay.classList.remove("hidden");
        overlay.classList.add("shown");
        modal.classList.remove("hidden");
        modal.classList.add("shown");
      } else {
        console.log(humScore, pcScore);
        resultText.textContent = `${result}`;
      }

      // console.log(`Animation has ended`);
    });
    const compChoice = "✋"; //computerChoice();
    // console.log(`PC: ${compChoice}`);
    const humChoice = e.target.textContent;
    // console.log(`You: ${humChoice}`);

    if (humChoice === compChoice) {
      result = tie;
      // console.log(`Draw`);
    } else if (humChoice === "✊" && compChoice === "✋") {
      result = lose;
      pcScore++;
    }
    // console.log(`Computer wins`);
    else if (humChoice === "✋" && compChoice === "✊") {
      result = win;
      humScore++;
      // console.log(`Human wins`);
    } else if (humChoice === "✌" && compChoice === "✋") {
      result = win;
      humScore++;
      // console.log(`Human wins`);
    } else if (humChoice === "✊" && compChoice === "✌") {
      result = win;
      humScore++;
      // console.log(`Human wins`);
    } else if (humChoice === "✋" && compChoice === "✌") {
      result = lose;
      pcScore++;
      // console.log("Computer wins");
    } else if (humChoice === "✌" && compChoice === "✊") {
      result = lose;
      pcScore++;
      // console.log(`Computer wins`);
    }
    if (humScore === 5 || pcScore === 5) {
      humScore > pcScore ? (winner = "You") : "Computer";
      gameOverState = true;
    }
  }
});

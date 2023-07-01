//DOM Selectors
const btnRock = document.querySelector(".rock--button");
const btnPaper = document.querySelector(".paper--button");
const btnScissors = document.querySelector(".scissors--button");
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
const masterContainer = document.querySelector(".container");
const overallLine = document.querySelectorAll(".overall--line");
const roundsPC = document.querySelector(".rounds--pc");
const roundsHum = document.querySelector(".rounds--human");
const computerText = document.querySelector(".computer--text");
const humanText = document.querySelector(".human--text");
const choiceTexts = document.querySelectorAll(".choice");
const pcChoice = document.querySelector(".computer--choice--text");
const humChoiceTxt = document.querySelector(".human--choice--text");
const resultTitle = document.querySelector(".result--modal--title");
const choiceButtons = document.querySelectorAll(".choice--button");
const changedMind = document.querySelector(".changed--mind");

//Global Variables
let humChoice;
let compChoice;

let humanScore = 0;
let computerScore = 0;
const choices = ["✊", "✋", "✌"];
let overallHumScore = 0;
let overallPCScore = 0;

const tie = "Draw";
const win = "You won";
const lose = "You lose";
let winner = "";
let result = "";
let pcScore = 0;
let humScore = 0;
let gameOverState = false;

//Functions
//Result Logic
const gameResult = function () {
  if (humChoice === compChoice) {
    return tie;
    // console.log(`Draw`);
  } else if (humChoice === "✊" && compChoice === "✋") {
    computerScore++;
    // console.log(`Computer wins`);
    return lose;
  } else if (humChoice === "✋" && compChoice === "✊") {
    humanScore++;
    // console.log(`Human wins`);
    return win;
  } else if (humChoice === "✌" && compChoice === "✋") {
    humanScore++;
    // console.log(`Human wins`);
    return win;
  } else if (humChoice === "✊" && compChoice === "✌") {
    humanScore++;
    // console.log(`Human wins`);
    return win;
  } else if (humChoice === "✋" && compChoice === "✌") {
    computerScore++;
    // console.log("Computer wins");
    return lose;
  } else if (humChoice === "✌" && compChoice === "✊") {
    computerScore++;
    // console.log(`Computer wins`);
    return lose;
  }
};

//Computer's choice
const computerChoice = function () {
  const num = Math.trunc(Math.random() * 3);
  const choice = choices[num];
  //   console.log(choice);
  return choice;
};

//Resetting scores on new game

//Hiding modal & blur overlay
const hideForeElements = function () {
  //Remove the blurry overlay filter
  overlay.classList.add("hidden");

  //Show the modal
  modal.classList.add("hidden");
};

//Showing modal & blur overlay
const showForeElements = function () {
  //Changing title to winner
  resultTitle.textContent = `${winner} won`;

  //Show the blurry overlay filter
  overlay.classList.remove("hidden");

  //Show the modal
  modal.classList.remove("hidden");
};

const resetScores = function () {
  humanScore = 0;
  computerScore = 0;
  winner = "";
  resultText.textContent = `Whenever you're ready 🙂`;
  humScoreText.textContent = humanScore;
  pcScoreText.textContent = computerScore;
};

//Event Listeners
//Listens to the entire interface element using event propagation, filtering for only the btn elements inside that div
interface.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn")) {
    //Fades in the score for this round for the computer and player
    console.log(humanScore, computerScore);
    scoreText.forEach((el) => {
      if (el.style.opacity === "") el.style.opacity = 1;
    });

    //Changes both icons to fists in prep for the shake animation
    const [hum, pc] = choiceTexts;
    choiceTexts.forEach((el) => {
      el.textContent = "✊";
      // el.classList.add("shake");
    });

    //Adds classes to the icon elements. Needs different classes because they rotate in opposite directions
    hum.classList.add("shake--hum");
    pc.classList.add("shake--pc");

    //This attaches to one of the shaking icons (doesn't matter which so I chose the human one)
    //The event listener only fires when the animation finishes, instead of timing a timout function perfectly this is more asynchronous
    const shakeWatcher = document.querySelector(".shake--hum");
    shakeWatcher.addEventListener("animationend", (e) => {
      pcChoice.textContent = compChoice;
      humChoiceTxt.textContent = humChoice;

      hum.classList.remove("shake--hum");
      pc.classList.remove("shake--pc");

      humScoreText.textContent = humanScore;
      pcScoreText.textContent = computerScore;

      if (gameOverState === true) {
        resultText.textContent = `Game over, ${winner} wins`;
        showForeElements();
        // overlay.classList.remove("hidden");
        // modal.classList.remove("hidden");
        gameOverState = false;
        if (winner === "You") {
          overallHumScore++;
          roundsHum.textContent = `${overallHumScore} rounds`;
        } else {
          overallPCScore++;
          roundsPC.textContent = `${overallPCScore} rounds`;
        }
      } else {
        resultText.textContent = `${result}`;
      }
    });

    compChoice = computerChoice();
    humChoice = e.target.textContent;
    result = gameResult();

    if (humanScore === 5 || computerScore === 5) {
      humanScore > computerScore ? (winner = "You") : (winner = "Computer");
      gameOverState = true;
    }
  }
  // e.stopPropagation();
  // console.log(gameOverCounter);
});

//Listens to the entire modal element, but filters for modal--buttons. Currently there is an issue where something in here or after here causes overallHumScore to go up by one
modalBtnsContainer.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("modal--buttons")) {
    if (e.target.classList.contains("yes--please")) {
      //Reset both scores
      resetScores();

      //Hide foreground
      hideForeElements();
    } else if (e.target.classList.contains("no--im--good")) {
      changedMind.classList.remove("hidden");
      resultText.textContent = "";
      scoreText.forEach((el) => {
        if (el.style.opacity === "1") el.style.opacity = "";
      });
      choiceButtons.forEach((el) => {
        // el.remove();
        el.classList.add("disabled");
        el.setAttribute("disabled", "");
      });

      // const changeMindBtn = document.createElement("btn");
      // changeMindBtn.textContent = `I want to play again!`;
      // interface.appendChild(changeMindBtn);
      // changeMindBtn.classList.add("changed--mind");

      hideForeElements();

      // //Remove the blurry overlay filter
      // overlay.classList.add("hidden");

      // //Remove the modal
      // modal.classList.add("hidden");
    }
  }
});

changedMind.addEventListener("click", function (e) {
  changedMind.classList.add("hidden");
  choiceButtons.forEach((el) => {
    el.classList.remove("disabled");
    el.removeAttribute("disabled");
  });

  scoreText.forEach((el) => {
    if (el.style.opacity === "") el.style.opacity = "1";
  });

  resetScores();
  console.log(humanScore, computerScore);
});

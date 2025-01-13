let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;

const buttons = document.querySelectorAll("button");
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const selectionsElement = document.querySelector("#selections");
const resultElement = document.querySelector("#result");
const scoreElement = document.querySelector("#score");

const getComputerChoice = () => {
  const randomNumber = Math.random();
  if (randomNumber <= 1 / 3) {
    return "rock";
  } else if (randomNumber > 1 / 3 && randomNumber < (1 / 3) * 2) {
    return "paper";
  } else {
    return "scissors";
  }
};

const playRound = () => {
  computerChoice = getComputerChoice();

  selectionsElement.textContent = `Your ${humanChoice} versus computer's ${computerChoice}`;

  if (computerChoice == humanChoice) {
    resultElement.textContent = "It's a tie!";
  } else if (
    (computerChoice == "rock" && humanChoice == "scissors") ||
    (computerChoice == "paper" && humanChoice == "rock") ||
    (computerChoice == "scissors" && humanChoice == "paper")
  ) {
    computerScore++;
    resultElement.textContent = "You lose!";
  } else if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper")
  ) {
    humanScore++;
    resultElement.textContent = "You win!";
  }

  if (humanScore == 5 || computerScore == 5) {
    if (humanScore > computerScore)
      scoreElement.textContent = `You win the game with ${humanScore} - ${computerScore}`;
    else
      scoreElement.textContent = `You lose the game with ${computerScore} - ${humanScore}`;

    humanScore = 0;
    computerScore = 0;
  } else {
    scoreElement.textContent = `Human ${humanScore} - ${computerScore} Computer`;
  }
};

// const playGame = () => {
//   for (i = 0; i < 5; i++) {
//     playRound();
//   }

//   if (humanScore < computerScore) {
//     alert("You lose the game, sorry!");
//   } else if (humanScore > computerScore) {
//     alert("You win the game, congratulations!");
//   } else if (humanScore == computerScore) {
//     alert("It's a tie!");
//   }
// };

// playGame();

rockButton.addEventListener("click", () => {
  humanChoice = "rock";
});

paperButton.addEventListener("click", () => {
  humanChoice = "paper";
});

scissorsButton.addEventListener("click", () => {
  humanChoice = "scissors";
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound();
  });
});

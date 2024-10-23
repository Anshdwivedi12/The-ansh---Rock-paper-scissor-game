let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game was a Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You are hacker! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `chal bosd**ke., har gaya chal nikal`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();
  let userWin = false;

  if (userChoice === compChoice) {
    drawGame();
  } else {
    // Determine winner based on the rules
    if (
      (userChoice === "rock" && compChoice === "scissors") ||
      (userChoice === "paper" && compChoice === "rock") ||
      (userChoice === "scissors" && compChoice === "paper")
    ) {
      userWin = true; // User wins
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", (event) => {
    const userChoice = choice.getAttribute("id");

    // Check for double-click
    if (event.detail === 2) {
      // If double-clicked, automatically win
      const compChoice = genCompChoice();
      showWinner(true, userChoice, compChoice); // User wins
    } else {
      // Single click results in the computer winning
      const compChoice = genCompChoice();
      let userWin = false; // User loses by default in a single click
      showWinner(userWin, userChoice, compChoice); // Computer wins
    }
  });
});

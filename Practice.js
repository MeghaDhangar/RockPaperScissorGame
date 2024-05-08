
let useScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score")

 
const genCompChoice = () => {
  // ROCK PAPER SCICCORS
  let options = ["rock", "paper", "scissor"];
  const ranIdx = Math.floor(Math.random() * 3);
  return options[ranIdx];
}


const drawGame = () => {
  msg.innerText = "Game was draw, Play Again !";
  msg.style.backgroundColor="#081b31";
}


const showWin = (userWin,userChoice,CompChoice) => {
  if (userWin) {
  useScore++;
  userScorePara.innerHTML=useScore;
    msg.innerText = `you win! your ${CompChoice} beats ${userChoice}`
    msg.style.backgroundColor="green"
  } else {
    compScore++;
    compScorePara.innerHTML=compScore;
    msg.innerText = `you lose! ${userChoice} beats your ${CompChoice}`
    msg.style.backgroundColor="red"
  }
}

const playGame = (userChoice) => {
  // genrate compter choice
  const CompChoice = genCompChoice();
  console.log("comp choice =", CompChoice);

  if (userChoice === CompChoice) {
    //  Droww
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // scissors paper
      userWin = CompChoice === "paper" ? false : true

    } else if (userChoice === "paper") {
      // rock, scissors
      userWin = CompChoice === "scissor" ? false : true;
    } else {
      // paper rock
      userWin = CompChoice === "rock" ? false : true;
    }
    showWin(userWin,CompChoice,userChoice)
  }
};


choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id")
   
    playGame(userChoice,);
  });
});













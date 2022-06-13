// ROCK, PAPER SCISSORS
const Rock = "rock";
const Paper = "paper";
const Scissors = "scissors";

const Tie = 0;
const Win = 1;
const Lost = 2;

var Rounds = [];
var userScore = [];
var compScore = [];

function computerPlay() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return Rock;
    case 1:
      return Paper;
    case 2:
      return Scissors;
  }
}

function calcResult(user, computer) {
  if (user === computer) {
    return Tie;
    //USER ROCK CASE
  } else if (user == "rock") {
    if (computer === Paper) return Lost;
    if (computer === Scissors) return Win;
    //USER PAPER CASE
  } else if (user == "paper") {
    if (computer === Scissors) return Lost;
    if (computer === Rock) return Win;
    //USER SCISSOR CASE
  } else if (user == "scissors") {
    if (computer === Rock) return Lost;
    if (computer === Paper) return Win;
  }
}

function userPlay() {
  // const userChoise = document.getElementById("userChoise").value;
  const userChoise = document.getElementById("userChoise").value;
  console.log(userChoise, "aquiiiiiiiiiiiii");
  return userChoise;
}

function playRound() {
  const user = userPlay();
  console.log(user, "userPlay");
  const userToLower = user.toLowerCase();
  //   document.getElementById("user").innerHTML = userToLower;

  const computer = computerPlay();
  console.log(computer, "computerPlay");
  document.getElementById("computer").innerHTML = computer;

  const result = calcResult(userToLower, computer);

  switch (result) {
    case Tie:
      document.getElementById("roundResult").innerHTML = "Tie!";
      console.log("Tie", " playRound");
      return Tie;
    case Win:
      document.getElementById("roundResult").innerHTML = "You win";
      console.log("Win", " playRound");
      return Win;
    case Lost:
      document.getElementById("roundResult").innerHTML = "You lost";
      console.log("Lost", " playRound");
      return Lost;
  }
}

function game() {
  if (Rounds.length <= 4) {
    const round = playRound();
    if (round === Tie) {
      console.log("tie");
    } else if (round === Win) {
      Rounds.push("Win");
    } else if (round === Lost) {
      Rounds.push("Lost");
    }
  } else {
    console.log(Rounds, "ROUNDS");
    for (let i = 0; i < Rounds.length; i++) {
      var win = 0;
      var lose = 0;
      var tie = 0;
      if (Rounds[i] === Win) {
        win = win + 1;
      } else if (Rounds[i] === Lost) {
        lose = lose + 1;
      } else if (Rounds[i] === Tie) {
        tie === tie + 1;
      }

      if (win > lose) {
        console.log(win, "win");
      } else if (lose > win) {
        console.log(lose, "lose");
      } else {
        console.log(tie, "tie");
      }
      Rounds = [];
      //   document.getElementById("user").innerHTML = "";
      document.getElementById("computer").innerHTML = "";
      document.getElementById("roundResult").innerHTML = "";
    }
  }
  document.getElementById("Score").innerHTML = Rounds;
}

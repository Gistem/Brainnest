//HEADER
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
//
function calcSquare() {
  let value = document.getElementById("sqVal").value;
  document.getElementById("sqResult").innerHTML = Math.hypot(value, value);
}

function calcTriangle() {
  let val1 = document.getElementById("trVal1").value;
  let val2 = document.getElementById("trVal2").value;
  let val3 = document.getElementById("trVal3").value;
  let S = val1 / 2 + val2 / 2 + val3 / 2;

  document.getElementById("trResult").innerHTML = Math.sqrt(
    S * (S - val1) * (S - val2) * (S - val3)
  );
}

function calcCircle() {
  let radius = document.getElementById("circVal").value;
  document.getElementById("circArea").innerHTML = Math.PI * Math.pow(radius, 2);
  document.getElementById("circCirc").innerHTML = Math.PI * radius * 2;
}

function largerNum() {
  let larg1 = document.getElementById("larger1").value;
  let larg2 = document.getElementById("larger2").value;

  if (larg1 === larg2) {
    document.getElementById("largerRes").innerHTML = "Same";
  } else if (larg1 > larg2) {
    document.getElementById("largerRes").innerHTML = larg1;
  } else if (larg1 < larg2) {
    document.getElementById("largerRes").innerHTML = larg2;
  }
}

function evenOdd() {
  let val = document.getElementById("evenOddVal").value;
  if (val % 2 === 0) {
    document.getElementById("evenOddRes").innerHTML = "Even";
  } else {
    document.getElementById("evenOddRes").innerHTML = "Odd";
  }
}

//------------------------------------------------------
//------------------------------------------------------

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
  const userChoise = prompt("Rock - Paper - Scissors?");
  return userChoise;
}

function playRound() {
  const user = userPlay();
  console.log(user, "userPlay");
  const userToLower = user.toLowerCase();
  document.getElementById("user").innerHTML = userToLower;

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
      Rounds.push("Tie");
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
      document.getElementById("user").innerHTML = "";
      document.getElementById("computer").innerHTML = "";
      document.getElementById("roundResult").innerHTML = "";
    }
  }
  document.getElementById("Score").innerHTML = Rounds;
}

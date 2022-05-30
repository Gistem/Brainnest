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
    document.getElementById("largerRes").innerHTML =
      "It's the same number broh ...";
  } else if (larg1 > larg2) {
    document.getElementById("largerRes").innerHTML = larg1;
  } else if (larg2 > larg1) {
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
function computerPlay() {
  return Math.floor(Math.random(1, 3));
}

function playRound(computerPlay) {
  const userchoise = window.prompt(" ✊, ✋, ✌️ ?");
  userchoise;
}

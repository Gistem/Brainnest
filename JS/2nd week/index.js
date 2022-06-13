//CALCULATOR
const displayLastestValue = document.getElementById("value-last");
const displayActualValue = document.getElementById("value-actual");
const buttonNumber = document.querySelectorAll(".number");
const buttonOperator = document.querySelectorAll(".operator");
const buttonSubstract = document.querySelector(".operatorsub");

window.onload = function () {
  document.onkeydown = keyboardInput;
};

const display = new Display(displayLastestValue, displayActualValue);

buttonNumber.forEach((button) => {
  button.addEventListener("click", () => display.addNumber(button.innerHTML));
});

keyboardInput = (key) => {
  if (!key.which) {
    return false;
  } else {
    key.preventDefault();
    if (key.which === 48 || key.which === 96) {
      display.addNumber("0");
    } else if (key.which === 49 || key.which === 97) {
      display.addNumber("1");
    } else if (key.which === 50 || key.which === 98) {
      display.addNumber("2");
    } else if (key.which === 51 || key.which === 99) {
      display.addNumber("3");
    } else if (key.which === 52 || key.which === 100) {
      display.addNumber("4");
    } else if (key.which === 53 || key.which === 101) {
      display.addNumber("5");
    } else if (key.which === 54 || key.which === 102) {
      display.addNumber("6");
    } else if (key.which === 55 || key.which === 103) {
      display.addNumber("7");
    } else if (key.which === 56 || key.which === 104) {
      display.addNumber("8");
    } else if (key.which === 57 || key.which === 105) {
      display.addNumber("9");
    } else if (key.which === 46 || key.which === 110) {
      display.addNumber(".");
    } else if (key.which === 42 || key.which === 106) {
      display.compute("multiplication");
    } else if (key.which === 47 || key.which === 111) {
      display.compute("division");
    } else if (key.which === 43 || key.which === 107) {
      display.compute("addition");
    } else if (key.which === 107 || key.which === 109) {
      display.addNumber("-");
    } else if (key.which === 13) {
      display.compute("equal");
    } else if (key.which === 8) {
      display.delete();
    } else {
      display = display;
    }
    return true;
  }
};

buttonOperator.forEach((button) => {
  button.addEventListener("click", () => display.compute(button.value));
});

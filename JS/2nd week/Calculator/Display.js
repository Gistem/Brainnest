class Display {
  constructor(displayLastestValue, displayActualValue) {
    this.displayActualValue = displayActualValue;
    this.displayLastestValue = displayLastestValue;
    this.calc = new Calculator();
    this.operationType = undefined;
    this.actualValue = "";
    this.lastestValue = "";
    this.mathOperators = {
      addition: "+",
      division: "/",
      multiplication: "x",
      substraction: "-",
    };
  }

  delete() {
    this.actualValue = this.actualValue.toString().slice(0, -1);
    this.printValues();
  }

  deleteAll() {
    this.actualValue = "";
    this.lastestValue = "";
    this.operationType = undefined;
    this.printValues();
  }

  compute(type) {
    this.operationType !== "equal" && this.calculate();
    this.operationType = type;
    this.lastestValue = this.actualValue || this.lastestValue;
    this.actualValue = "";
    this.printValues();
  }

  addNumber(number) {
    if (number === "." && this.actualValue.includes(".")) return;
    if (number === "-" && this.actualValue.length !== 0) {
      this.compute("substraction");
      this.displayActualValue.textContent = "";
      return;
    }
    this.actualValue = this.actualValue.toString() + number.toString();
    this.printValues();
  }

  printValues() {
    this.displayActualValue.textContent = this.actualValue;
    this.displayLastestValue.textContent = `${this.lastestValue} ${
      this.mathOperators[this.operationType] || ""
    }`;
  }

  calculate() {
    const lastestValue = parseFloat(this.lastestValue);
    const actualValue = parseFloat(this.actualValue);

    if (isNaN(actualValue) || isNaN(lastestValue)) {
      this.displayLastestValue.textContent = "SYNTAX ERROR";
    } else {
      this.actualValue = this.calc[this.operationType](
        lastestValue,
        actualValue
      );
    }
  }
}

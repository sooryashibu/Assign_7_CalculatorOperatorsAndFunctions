// Display the result in the result div
function displayResult(value) {
  document.getElementById("result").innerText = "Result: " + value;
}

// Get value from input by ID and parse it as float
function getValue(id) {
  return parseFloat(document.getElementById(id).value);
}

// Arithmetic operations
function add() {
  const a = getValue("num1");
  const b = getValue("num2");
  displayResult(a + b);
}

function subtract() {
  const a = getValue("num1");
  const b = getValue("num2");
  displayResult(a - b);
}

function multiply() {
  const a = getValue("num1");
  const b = getValue("num2");
  displayResult(a * b);
}

function divide() {
  const a = getValue("num1");
  const b = getValue("num2");
  if (b === 0) {
    displayResult("Error: Division by zero");
  } else {
    displayResult(a / b);
  }
}

// Square and cube functions
function square() {
  const x = getValue("numSingle");
  displayResult(x * x);
}

function cube() {
  const x = getValue("numSingle");
  displayResult(x * x * x);
}

const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];
  function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
  }
function add(num1, num2) {
  const enteredNumber = getUserInput(); 
  const initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWriteOutput('+', initialResult, enteredNumber);
  logEntries.push(enteredNumber);
}

function subtract(num1, num2) {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  createAndWriteOutput('-', initialResult, enteredNumber);
  const logEntry = {
    operation: 'SUBTRACT',
    prevResult: initialResult,
    number: enteredNumber,
    result: currentResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function multiply(num1, num2) {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult * enteredNumber;
  createAndWriteOutput('*', initialResult, enteredNumber);
}

function divide(num1, num2) {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult / enteredNumber;
  createAndWriteOutput('/', initialResult, enteredNumber);
}

function getUserInput() {
    return parseInt(userInput.value);
}
//  currentResult = add(5, 6);

// currentResult = (currentResult + 10) * 3 / 2 - 1;
// let calculationDescription = '(' + defaultResult + ' + 10) * 3 / 2 - 1';
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

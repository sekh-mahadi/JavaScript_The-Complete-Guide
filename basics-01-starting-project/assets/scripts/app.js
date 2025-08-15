const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2) {
  const enteredNumber = getUserInput(); 
  const calcDescription = `${currentResult} + ${enteredNumber}`;
  currentResult = currentResult + enteredNumber;
  outputResult(currentResult, calcDescription);
}
function getUserInput() {
  return parseInt(userInput.value);
}
//  currentResult = add(5, 6);

// currentResult = (currentResult + 10) * 3 / 2 - 1;
// let calculationDescription = '(' + defaultResult + ' + 10) * 3 / 2 - 1';
addBtn.addEventListener("click", add);

const firstNumberInput = document.querySelector(".input1");
const secondNumberInput = document.querySelector(".input2");
const operator = document.querySelector("#operators");
const calBtn = document.querySelector("#calBtn");
const resultDisplay = document.querySelector("#result");

calBtn.addEventListener("click", Calculator);

function Calculator() {
  const num1 = parseFloat(firstNumberInput.value);
  const num2 = parseFloat(secondNumberInput.value);
  const operators = operator.value;

  if (isNaN(num1)) {
    resultDisplay.textContent = `${num1} is not a valid number`;
    return;
  }
  if (isNaN(num2)) {
    resultDisplay.textContent = `${num2} is not a valid number`;
    return;
  }

  let result;
  switch (operators) {
    case "addition":
      result = num1 + num2;
      break;
    case "subtraction":
      result = num1 - num2;
      break;
    case "multiplication":
      result = num1 * num2;
      break;
    case "division":
      if (num2 === 0) {
        resultDisplay.textContent = "Division by zero is not allowed.";
        return;
      }
      result = num1 / num2;
      break;

    default:
      resultDisplay.textContent = "Invalid operator";
      return;
  }
  resultDisplay.textContent = `Result: ${result}`;
}

const userInputs = document.querySelector(".scoreInput");
const outputs = document.querySelector(".output");
const submit = document.querySelector(".gradeSubmit");

submit.addEventListener("click", gradeCalculator);

function gradeCalculator() {
  const input = parseFloat(userInputs.value);

  if (input >= 90) {
    outputs.textContent = `${input}: Your Grade is A`;
  } else if (input >= 80) {
    outputs.textContent = `${input}: Your Grade is B`;
  } else if (input >= 70) {
    outputs.textContent = `${input}: Your Grade is C`;
  } else if (input >= 60) {
    outputs.textContent = `${input}: Your Grade is D`;
  } else {
    outputs.textContent = `${input}: Your Grade is F`;
  }
}

const userInputs = document.querySelector(".scoreInput");
const outputs = document.querySelector(".output");
const submit = document.querySelector(".gradeSubmit");

submit.addEventListener("click", gradeCalculator);

function gradeCalculator() {
  const input = parseFloat(userInputs.value);
  outputs.className ="";

  // Validate input
  if(isNaN(input)){
    outputs.textContent = "please enter a valid number.";
    return;
  }

  if (input < 0 || input > 100){
    outputs.textContent = "please enter a score between 0 and 100";
    return;
  }

  // Grade calculation

  if (input >= 90) {
    outputs.textContent = `${input}: Your Grade is A`;
    outputs.classList.add("gradeA");
  } else if (input >= 80) {
    outputs.textContent = `${input}: Your Grade is B`;
    outputs.classList.add("gradeB");

  } else if (input >= 70) {
    outputs.textContent = `${input}: Your Grade is C`;
    outputs.classList.add("gradeC");

  } else if (input >= 60) {
    outputs.textContent = `${input}: Your Grade is D`;
    outputs.classList.add("gradeD");

  } else {
    outputs.textContent = `${input}: Your Grade is F`;
    outputs.classList.add("gradeF");

  }
}
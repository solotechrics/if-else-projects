const userInputs = document.querySelector(".scoreInput");
const outputs = document.querySelector(".output");
const submitBtn = document.querSelector(".gradeSubmit");
const submit = document.querySelector(".gradeSubmit")

submit.addEventListener("click", gradeCalculator);

function gradeCalculator(){
  const input = parseFloat(userInputs.value);

  if(input === 90 || input >= 90){
    outputs.textContent = `${input}: Your Grade is A`;
  }
}
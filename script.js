const ageInput = document.querySelector(".ageInput");
const output = document.querySelector(".output");
const btn = document.querySelector(".btn");

// Age Validation
const ageValidation = 18;

btn.addEventListener("click", checkAge());
function checkAge(){
    const age = Number(ageInput.value);

    if(age >= ageValidation){
        output.textContent = `${age}:✅ You are elgible to drive`;
    } else if (age < ageValidation) {
        output.textContent = `${age}: ❌ Sorry you are not elgible to drive`;
    } else {
        output.textContent = "Invalid input";
    }
}
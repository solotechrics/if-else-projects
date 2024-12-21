const numberInput = document.querySelector(".numberInput");
const numberChecker = document.querySelector(".numberChecker");
const btn = document.querySelector(".btn")
btn.addEventListener("click", Checker);

function Checker(){
    const num = Number(numberInput.value);

    if(num % 2 === 0){
        numberChecker.textContent = `${num}: This is an Even Number`;
    } else {
        numberChecker.textContent = `${num}: This is an Odd Number`;
    }
}
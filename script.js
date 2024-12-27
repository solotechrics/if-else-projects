const dropdown = document.querySelector("#temperature");
const output = document.querySelector("#output");

dropdown.addEventListener("change", function(){
    const selectedValue = dropdown.value;
    output.textContent = `You selected ${selectedValue}`;
})
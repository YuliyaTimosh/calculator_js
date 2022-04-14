let btnValue = document.querySelectorAll('.integers button, .operators');
const equalBtn = document.querySelector('.result');
const clearBtn = document.querySelector('.clear');
const sqrtBtn = document.querySelector('.sqrt');
const clearByOneSignBtn = document.querySelector('.clearByOneSign');
let inputField = document.querySelector('.calculator input[name=display]');

btnValue.forEach(btn => btn.addEventListener('click', displayValueOnInput));

equalBtn.addEventListener('click', showResult);
clearBtn.addEventListener('click', clearValueOnInput);
clearByOneSignBtn.addEventListener('click', clearByOneSign);
sqrtBtn.addEventListener('click', toSqrt);

function displayValueOnInput(e) {
    inputField.value += e.target.innerText;
}

function showResult() {
    if (inputField.value === '') {
        return;
    }
    inputField.value = eval(inputField.value);

}

function clearValueOnInput() {
    inputField.value = '';
}

function clearByOneSign() {
    inputField.value = inputField.value.slice(0, -1);
}

function toSqrt() {
    showResult();
    inputField.value = Math.sqrt(inputField.value);
    console.log(inputField.value);

}
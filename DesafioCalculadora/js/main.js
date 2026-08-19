const inputNumber1 = document.getElementById("inputNumber1");
const inputNumber2 = document.getElementById("inputNumber2");
const resultBox = document.getElementById("result-box");

const btnPlus = document.getElementById("btn-plus");
const btnTimes = document.getElementById("btn-times");
const btnMinus = document.getElementById("btn-minus");
const btnClear = document.getElementById("btn-clear");

btnPlus.addEventListener("click", handlePlus);
btnTimes.addEventListener("click", handleTimes);
btnMinus.addEventListener("click", handleMinus);
btnClear.addEventListener("click", handleClear);

function isNumber(value) {
    return !isNaN(parseFloat(value)) &&
            isFinite(value);
}

function validateInput(inputElement) {
    const isValid = isNumber(inputElement.value);
    if (isValid) {
        inputElement.classList.remove("input-error");
    }
    else {
        inputElement.classList.add("input-error");
    }

    return isValid;
}

function handlePlus() {
    const valid1 = validateInput(inputNumber1);
    const valid2 = validateInput(inputNumber2);

    if (valid1 &&
        valid2) {
        const number1 = parseFloat(inputNumber1.value);
        const number2 = parseFloat(inputNumber2.value);
        resultBox.textContent = number1 + number2;
    }
}

function handleTimes() {
    const valid1 = validateInput(inputNumber1);
    const valid2 = validateInput(inputNumber2);

    if (valid1 &&
        valid2) {
        const number1 = parseFloat(inputNumber1.value);
        const number2 = parseFloat(inputNumber2.value);
        resultBox.textContent = number1 * number2;
    }
}

function handleMinus() {
    const valid1 = validateInput(inputNumber1);
    const valid2 = validateInput(inputNumber2);

    if (valid1 &&
        valid2) {
        const number1 = parseFloat(inputNumber1.value);
        const number2 = parseFloat(inputNumber2.value);
        resultBox.textContent = number1 - number2;
    }
}

function handleClear() {
    inputNumber1.value = "";
    inputNumber2.value = "";
    inputNumber1.classList.remove("input-error");
    inputNumber2.classList.remove("input-error");
    resultBox.textContent = "0";
}

handleClear();
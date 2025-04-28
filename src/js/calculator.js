let input1 = document.getElementById("input1");
let btnPlus = document.getElementById("btnPlus");
let btnMultiplication = document.getElementById("btnMultiplication");
let btnMinus = document.getElementById("btnMinus");
let btnDivision = document.getElementById("btnDivision");
let input2 = document.getElementById("input2");
let btnEqual = document.getElementById("btnEqual");
let inputResult = document.getElementById("inputResult");

let operation = "";

// Вибір операції
btnPlus.addEventListener("click", function() {
    operation = "+";
});

btnMinus.addEventListener("click", function() {
    operation = "-";
});

btnMultiplication.addEventListener("click", function() {
    operation = "*";
});

btnDivision.addEventListener("click", function() {
    operation = "/";
});

// Обчислення
btnEqual.addEventListener("click", function() {
    let num1 = parseFloat(input1.value);
    let num2 = parseFloat(input2.value);

    if (isNaN(num1) || isNaN(num2)) {
        inputResult.value = "Введіть числа!";
        return;
    }

    let result;

    if (operation === "+") {
        result = num1 + num2;
    } else if (operation === "-") {
        result = num1 - num2;
    } else if (operation === "*") {
        result = num1 * num2;
    } else if (operation === "/") {
        if (num2 === 0) {
            inputResult.value = "На 0 ділити не можна!";
            return;
        }
        result = num1 / num2;
    } else {
        inputResult.value = "Оберіть операцію!";
        return;
    }

    inputResult.value = result;
});
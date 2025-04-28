import "../css/birthday.module.css";

document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById("checkYearBtn");
    let input = document.getElementById("yearInput");
    let result = document.getElementById("yearResult");

    if (!button || !input || !result) {
        console.error("Помилка: Один із елементів не знайдено!");
        return;
    }

    button.addEventListener("click", function () {
        let year = parseInt(input.value);

        if (isNaN(year)) {
            result.textContent = "Введіть коректний рік!";
            result.style.color = "red";
            return;
        }

        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            result.textContent = "Ви народилися у високосний рік!";
            result.style.color = "green";
        } else {
            result.textContent = "Ви народилися не у високосний рік.";
            result.style.color = "red";
        }
    });
});
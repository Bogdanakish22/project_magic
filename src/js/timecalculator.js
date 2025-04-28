let input = document.getElementById("input");
let checkBtn = document.getElementById("checkTimeBtn");
let result = document.getElementById("result");

checkBtn.addEventListener("click", function() {
    let seconds = parseInt(input.value);

    if (isNaN(seconds) || seconds < 0) {
        result.textContent = "Введіть правильне число!";
        return;
    }

    let days = Math.floor(seconds / 86400);
    seconds %= 86400;

    let hours = Math.floor(seconds / 3600);
    seconds %= 3600;

    let minutes = Math.floor(seconds / 60);
    seconds %= 60;

    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    result.textContent = `${days} дн. ${hours}:${minutes}:${seconds}`;
});









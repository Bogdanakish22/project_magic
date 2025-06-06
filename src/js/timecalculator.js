import "../css/timecalculator.module.css";

const input = document.getElementById("time-calculator-input");
input.addEventListener("input", calculateTime)
function calculateTime() {
  const result = document.getElementById("time-calculator-result");

  if (input.value) {
    const totalSeconds = parseInt(input.value, 10);
    const days = Math.floor(totalSeconds / (24 * 3600));
    const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    result.textContent = `${days} дн. ${hours}:${minutes}:${seconds}`;
    result.style.display = "inline";
  } else {
    result.textContent = "...";
    result.style.display = "none";
  }
}
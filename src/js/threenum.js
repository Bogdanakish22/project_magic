import "../css/threenum.module.css";

document.addEventListener('DOMContentLoaded', function () {
  function updateMaxValue() {
    const first = parseFloat(document.getElementById('firstNumber').value);
    const second = parseFloat(document.getElementById('secondNumber').value);
    const third = parseFloat(document.getElementById('thirdNumber').value);

    if (isNaN(first) || isNaN(second) || isNaN(third)) {
      document.getElementById('resultText').textContent = 'Введіть усі три числа';
      return;
    }

    const max = Math.max(first, second, third);
    document.getElementById('resultText').textContent = `Найбільше число, яке ви ввели - ${max}`;
  }

  document.getElementById('firstNumber').addEventListener('input', updateMaxValue);
  document.getElementById('secondNumber').addEventListener('input', updateMaxValue);
  document.getElementById('thirdNumber').addEventListener('input', updateMaxValue);
});

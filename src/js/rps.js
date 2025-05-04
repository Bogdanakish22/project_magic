import "../css/rps.module.css";

const choices = ['камінь', 'ножиці', 'папір'];
let userScore = 0;
let computerScore = 0;

function play(userChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  showComputerChoice(computerChoice);

  let result = '';
  if (userChoice === computerChoice) {
    result = 'Нічия!';
  } else if (
    (userChoice === 'камінь' && computerChoice === 'ножиці') ||
    (userChoice === 'ножиці' && computerChoice === 'папір') ||
    (userChoice === 'папір' && computerChoice === 'камінь')
  ) {
    userScore++;
    result = 'Ви виграли раунд!';
  } else {
    computerScore++;
    result = 'Комп’ютер виграв раунд!';
  }

  document.getElementById('result').textContent = result;
  updateScore();
}

function updateScore() {
  document.getElementById('score').innerHTML = `
    <p>Рахунок:</p>
    <p>Комп’ютер - ${computerScore}</p>
    <p>Ви - ${userScore}</p>
  `;
}


function showComputerChoice(choice) {
  const iconMap = {
    'камінь': 'rock.svg',
    'ножиці': 'scissors.svg',
    'папір': 'paper.svg',
  };

  document.getElementById('computer-choice').innerHTML = `
    <div class="rps-icon">
      <img src="${iconMap[choice]}" alt="${choice}" />
    </div>
  `;
}


function computerTurn() {
  const randomChoice = choices[Math.floor(Math.random() * choices.length)];
  play(randomChoice);
}


document.querySelectorAll('.rps-icon[data-choice]').forEach(el => {
  el.addEventListener('click', () => {
    const choice = el.dataset.choice;
    play(choice);
  });
});

document.getElementById('computer-btn').addEventListener('click', computerTurn);

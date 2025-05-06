   const options = ["камiнь", "папiр", "ножицi"];
  const icons = document.querySelectorAll(".rps-icon");
  const resultText = document.getElementById("result");
  const scoreContainer = document.getElementById("score");
  const button = document.querySelector(".rps-button");

  let userScore = 0;
  let computerScore = 0;
  let userChoice = '';

  function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  }

  function determineWinner(user, computer) {
    if (user === computer) return "Нічия!";
    if (
      (user === "камiнь" && computer === "ножицi") ||
      (user === "папiр" && computer === "камiнь") ||
      (user === "ножицi" && computer === "папiр")
    ) {
      userScore++;
      return "Ви виграли!";
    } else {
      computerScore++;
      return "Комп’ютер виграв!";
    }
  }
  

  function updateScore() {
    scoreContainer.innerHTML = `
      <p>Рахунок:</p>
      <p>Комп’ютер - ${computerScore}</p>
      <p>Ви - ${userScore}</p>
    `;
  }


  icons.forEach((icon, index) => {
    icon.addEventListener("click", () => {
      userChoice = options[index];
      resultText.textContent = "Вибрано: " + userChoice;
    });
  });

  button.addEventListener("click", () => {
    if (!userChoice) {
      resultText.textContent = "Спочатку зробіть вибір!";
      return;
    }
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    resultText.textContent = `Ваш вибір: ${userChoice}, Комп’ютер: ${computerChoice}. ${result}`;
    updateScore();
    userChoice = '';
  });

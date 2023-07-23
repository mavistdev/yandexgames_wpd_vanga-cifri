let minValue, maxValue, secretNumber;

function startGame() {
  minValue = parseInt(document.getElementById("minValue").value);
  maxValue = parseInt(document.getElementById("maxValue").value);

  if (isNaN(minValue) || isNaN(maxValue)) {
    alert("Введите корректные значения минимального и максимального чисел.");
    return;
  }

  if (minValue >= maxValue) {
    alert("Минимальное значение должно быть меньше максимального.");
    return;
  }

  secretNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  document.getElementById("message").textContent = "Игра началась! Введите ваше предположение.";
}

function checkGuess() {
  const guess = parseInt(document.getElementById("guess").value);

  if (isNaN(guess)) {
    alert("Введите корректное число.");
    return;
  }

  if (guess === secretNumber) {
    document.getElementById("message").textContent = "Поздравляем! Вы угадали число.";
  } else if (guess < secretNumber) {
    document.getElementById("message").textContent = "Загаданное число больше.";
  } else {
    document.getElementById("message").textContent = "Загаданное число меньше.";
  }
}

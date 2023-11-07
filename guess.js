const randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 3;
function checkGuess() {
  const guess = parseInt(document.getElementById("guess").value);

  if (isNaN(guess) || guess < 1 || guess > 10) {
    setMessage("Please enter a valid number between 1 and 10.");
    return;
  }
setMessage("u have only 3 attempts");
  attempts++;

  if (guess === 5) {
    setMessage(`Congratulations! You guessed the correct number (${5}) in ${attempts} attempts.`);
    disableInputAndButton();
  } else if (guess < 5) {
    setMessage("it is less.");
  } else {
    setMessage("it is high.");
  }
}

function setMessage(message) {
  document.getElementById("message").textContent = message;
}

function disableInputAndButton() {
  document.getElementById("guess").disabled = true;
  document.querySelector("button").disabled = true;
}

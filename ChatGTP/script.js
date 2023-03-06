// Seleccionar elementos del DOM
const startButton = document.querySelector('#start-button');
const guessInput = document.querySelector('#guess-input');
const guessButton = document.querySelector('#guess-button');
const resultContainer = document.querySelector('#result-container');

// Variables globales
let randomNumber;
let remainingGuesses;

// Generar un número aleatorio del 1 al 10
function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

// Inicializar el juego
function initGame() {
  randomNumber = generateRandomNumber();
  remainingGuesses = 3;
  resultContainer.innerText = '';
  guessInput.value = '';
  guessInput.disabled = false;
  guessButton.disabled = false;
  guessInput.focus();
}

// Comprobar el número ingresado
function checkGuess() {
  const guess = parseInt(guessInput.value);
  
  if (isNaN(guess) || guess < 1 || guess > 10) {
    resultContainer.innerText = 'Ingrese un número válido del 1 al 10';
    return;
  }
  
  remainingGuesses--;
  
  if (guess === randomNumber) {
    resultContainer.innerText = '¡Ganaste!';
    guessInput.disabled = true;
    guessButton.disabled = true;
  } else if (remainingGuesses === 0) {
    resultContainer.innerText = 'Perdiste. El número era ' + randomNumber;
    guessInput.disabled = true;
    guessButton.disabled = true;
  } else {
    let message = 'Intento ' + (3 - remainingGuesses) + ': ';
    
    if (guess < randomNumber) {
      message += 'El número es mayor';
    } else {
      message += 'El número es menor';
    }
    
    resultContainer.innerText = message;
    guessInput.value = '';
    guessInput.focus();
  }
}

// Agregar eventos
startButton.addEventListener('click', initGame);
guessButton.addEventListener('click', checkGuess);

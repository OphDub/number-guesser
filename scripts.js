
//Global Variables
var correctGuess 
var clearButton = document.querySelector('.clear-button');
var resetButton = document.querySelector('.reset-button');
var guessButton = document.querySelector('.guess-button');
var userGuess = document.querySelector('.user-guesses');
var lastGuessedNumber = document.querySelector('.last-guessed-number');
var guessOutput = document.querySelector('.guess-output');
var guessResponseDetail = document.querySelector('.guess-response-detail');
var guessResponse = document.querySelector('.guess-response');
var minGuess = Math.ceil(1);
var maxGuess = Math.ceil(100);

//Functions
window.onload = function() {
	numberGuesser();
};

function numberGuesser(){
	correctGuess = Math.floor(Math.random() *( maxGuess - minGuess + 1 ));
};

function guessNumber(){
	lastGuessedNumber.innerText = userGuess.value;
	guessResponse.innerText = 'Your last guess was';
	console.log(userGuess.value, correctGuess);
	if (userGuess.value > correctGuess){
		guessResponseDetail.innerHTML = 'That is too high. Guess lower.';
		console.log('Too high');
	} else if (userGuess.value < correctGuess){
		guessResponseDetail.innerHTML = 'That is too low. Guess higher.';
		console.log('Too low');
	} else {
		guessResponseDetail.innerHTML = 'Boom! That is correct!';
		console.log('Correct');
	}
};

function clear() {
	userGuess.value='';
	console.log(userGuess.innerHTML);
};

function reset() {
	guessResponse.innerHTML = '';
	lastGuessedNumber.innerText = '';	
	guessResponseDetail.innerText = '';
	console.log('Number Guesser has been reset!');
};

//Buttons:

guessButton.addEventListener('click', guessNumber);

clearButton.addEventListener('click', clear);

resetButton.addEventListener('click', function(){
	clear();
	numberGuesser();
	reset();
	});
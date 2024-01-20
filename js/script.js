//unordered list where player's guessed letters will appear
const ulGuessedLetters = document.querySelector(".guessed-letters");
//text button "guess"
const button = document.querySelector(".guess");
//text input where player guesses letter
const textInput = document.querySelector(".letter");
//paragraph where word in progress will appear
const progress = document.querySelector(".word-in-progress");
//paragraph where remaining quesses will display
const remainingQuess = document.querySelector(".remaining");
//span for remaining quesses
const span = document.querySelector("span");
//paragraph where message will appear when player guesses a letter
const message = document.querySelector(".message");
//button prompt to play again
const prompt = document.querySelector(".play-again");

//starting word "magnolia"
const word = "magnolia";
//empty array for guessed letters
const guessedLetters = [];


// Display our symbols as placeholders for the chosen word's letters
const placeholder = function (word) {
    progress.innerText = "●";
    // create an empty array
    const dotArray = [];
    // loop through the word
    for (const letter of word) {
           // push the number of letters in the array in terms of dots
           dotArray.push("●");
    }
    //set the inner text to the array
  progress.innerText = dotArray.join("");
    
};

placeholder(word);

button.addEventListener("click", function (e){
    e.preventDefault();
    //empty message paragraph
    message.innerText = "";
    //grab what was entered in the input
    const guess = textInput.value;
    //save result of function call to new variable
    const goodGuess = validateInput(input);


    textInput.value = "";
});

console.log(goodGuess);


//function purpose to validate player's input 
const validateInput = function (input){
    //regular expression validates input as letter only
    const acceptedLetter = /[a-zA-Z]/
    //check if input is empty
    if(input.length === 0) {
        message.innerText = "Guess a letter.";
    //check if player has entered more than one letter
    } else if(input.length > 1) {
        message.innerText = "Oops, only guess one letter at a time";
    //check if player entered character that doesn't match the regular expression
    } else if(input.match(acceptedLetter)) {
        message.innertext = "Please enter a letter from A to Z.";
    } else { 
        return input;
    }
};

//function to capture input
const makeGuess = function (guess) {
    guess = guess.toUpperCase();

    //check if array already contains letter
    if(guessedLetters.includes(guess)) {
        message.innerText = "Oh no, you already guessed that letter, try again.";
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);

    }
};
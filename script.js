// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var passwordLength;

// Function to prompt user for password options
function getPasswordOptions() {
    var passwordCh = [];
    do {
      passwordLength = prompt ("Choose length of your password (8-128 characters):"); 
      if (passwordLength >= 8 && passwordLength<= 128){
        passwordLength = parseInt(passwordLength);
          //confrm popups to choose characters
        var specialCharConfirm = confirm("Would you like special characters in your password?");
        var numbersConfirm = confirm("Would you like numbers in your password?");
        var upperConfirm = confirm("Would you like upper case letters in your password?");
        var lowerConfirm = confirm("Would you like lower case letters in your password?");
  
          if (specialCharConfirm){
            passwordCh = passwordCh.concat(specialCharacters);
          } 
          if (numbersConfirm){
            passwordCh = passwordCh.concat(numericCharacters);
          } 
          if (upperConfirm){
            passwordCh = passwordCh.concat(upperCasedCharacters);
          } 
          if (lowerConfirm){
            passwordCh = passwordCh.concat(lowerCasedCharacters);
          }
      }
    } while ((passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) && passwordLength); //if user choses wrong lenght of the password or types anyting different than number, AND the prompt is true it enters the loop. 
    return passwordCh;
  }
  

// Function for getting a random element from an array
function getRandom(arr) {
  var newPassword ="";
  var newChar;
  var p;
  for(var i = 0; i < passwordLength; i++){ 
    p = getRandom(0, (arr.length-1)); 
    newChar = arr[p];                 
    newPassword = newPassword + newChar;
  }
  return newPassword;
}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
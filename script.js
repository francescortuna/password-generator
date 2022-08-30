// Assignment code here

// Variables for the different criteria
var passwordLength;
var hasUpper;
var hasLower;
var hasNumbers;
var hasSpecial;

// Arrays to specify what can be in password if criteria is chosen
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lower = upper.map(letter => letter.toLowerCase());
var numbers = ['1','2','3','4','5','6','7','8','9','0'];
var special = ['!', '"','#','$','%','&','^','*','(',')','-','=','+','~','`','_','{','[','}',']','|',':',';','"',"'",'<',',','>','?','/'];

function generatePassword () {
  // User defines the criteria
  passwordLength = prompt("How many characters, between 8 and 128, do you want in your password?");
  if (!passwordLength) {
    alert("Please specify how many characters you want your password to be.")
  } else if(passwordLength < 8 || passwordLength > 128 ) {
    alert("Please choose a length between 8 and 128 characters.")
  } else {
    hasUpper = confirm("Do you want your password to have uppercase letters?");
    hasLower = confirm("Do you want your password to have lowercase letters?");
    hasNumbers = confirm("Do you want your password to have numbers?");
    hasSpecial = confirm("Do you want your password to have special characters?")
    }

  // An object with all the user criteria
  var passwordCriteria = {
    hasUpper,
    hasLower,
    hasNumbers,
    hasSpecial
  }

  // Creating an array with possible characters based on user criteria
  var passwordArray = [];
  var possibleCharacters;
  for(index = 0; index < passwordLength; index++) {
    // User selects all criteria
    if(passwordCriteria.hasUpper && passwordCriteria.hasLower && passwordCriteria.hasNumbers && passwordCriteria.hasSpecial) {
      possibleCharacters = [...upper, ...lower, ...numbers, ...special];
      passwordArray.push(possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)]);
    // User selects 3 out of 4 criteria
    } else if(passwordCriteria.hasUpper && passwordCriteria.hasLower && passwordCriteria.hasNumbers) {
      possibleCharacters = [...upper, ...lower, ...numbers];
      passwordArray.push(possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)]);
    } else if(passwordCriteria.hasUpper && passwordCriteria.hasLower && passwordCriteria.hasSpecial) {
      possibleCharacters = [...upper, ...lower, ...special];
      passwordArray.push(possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)]);
    } else if(passwordCriteria.hasUpper && passwordCriteria.hasNumbers && passwordCriteria.hasSpecial) {
      possibleCharacters = [...upper, ...numbers, ...special];
      passwordArray.push(possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)]);
    } else if(passwordCriteria.hasLower && passwordCriteria.hasNumbers && passwordCriteria.hasSpecial) {
      possibleCharacters = [...lower, ...numbers, ...special];
      passwordArray.push(possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)]);
    // User selects 2 out of 4 criteria
    } else if(passwordCriteria.hasUpper && passwordCriteria.hasLower) {
      possibleCharacters = [...upper, ...lower];
      passwordArray.push(possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)]);
    } else if(passwordCriteria.hasNumbers && passwordCriteria.hasSpecial) {
      possibleCharacters = [...numbers, ...special];
      passwordArray.push(possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)]);
    } else if(passwordCriteria.hasUpper && passwordCriteria.hasNumbers) {
      possibleCharacters = [...upper, ...numbers];
      passwordArray.push(possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)]);
    } else if(passwordCriteria.hasLower && passwordCriteria.hasSpecial) {
      possibleCharacters = [...lower, ...special];
      passwordArray.push(possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)]);
    } else if(passwordCriteria.hasUpper && passwordCriteria.hasSpecial) {
      possibleCharacters = [...upper, ...special];
      passwordArray.push(possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)]);
    } else if(passwordCriteria.hasLower && passwordCriteria.hasNumbers) {
      possibleCharacters = [...lower, ...numbers];
      passwordArray.push(possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)]);
    // User selects 1 out of 4 criteria
    } else if(passwordCriteria.hasUpper) {
      possibleCharacters = upper;
      passwordArray.push(possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)]);
    } else if(passwordCriteria.hasLower) {
      possibleCharacters = lower;
      passwordArray.push(possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)]);
    } else if(passwordCriteria.hasNumbers) {
      possibleCharacters = numbers;
      passwordArray.push(possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)]);
    } else if(passwordCriteria.hasSpecial) {
      possibleCharacters = special;
      passwordArray.push(possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)]);
    } else {
      alert("Please specify criteria.")
      return;
    }
  }

  // Joins all the elements in the array to make final password
  var password = passwordArray.join('');

  // Prints in console the user criteria and final password
  console.log("Your password has " + passwordLength + " characters.")
  if(hasUpper){
    console.log("Your password has uppercase letters.")
  } else {
    console.log("Your password does not have uppercase letters.")
  }
  if(hasLower){
    console.log("Your password has lowercase letters.")
  } else {
    console.log("Your password does not have uppercase letters.")
  }
  if(hasNumbers){
    console.log("Your password has numbers..")
  } else {
    console.log("Your password does not have numbers.")
  }
  if(hasSpecial){
    console.log("Your password has special characters.")
  } else {
    console.log("Your password does not have special characters.")
  }

  return password;
  } 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

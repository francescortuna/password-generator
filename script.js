// Assignment code here

// Variables for the different criteria
var passwordLength;
var hasUpper;
var hasLower;
var hasNumbers;
var hasSpecial;

function generatePassword () {
  passwordLength = prompt("How many characters, between 8 and 128, do you want in your password?");
  // ADD LATER console.log("Your password has " + passwordLength + " characters.")

  // User defines the criteria
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

// Assignment code here
// Starts function to ask user for criteria and generate password that matches criteria
function generatePassword() {
  // Asks user how long password should be then prints choice in console
  var passwordLength = prompt("Choose a length between 8 and 128 characters for the password.")
  console.log("The password length is " + passwordLength + " characters.")
  // If user does not select password length
  if(!passwordLength) {
    alert("Please choose length of password.")
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

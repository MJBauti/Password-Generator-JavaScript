// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

const RandomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  special: getRandomSpecial
};

function generatePassword() {
  var generatedPassword = "";

  // Have user define characters used
  var passwordCharSet = "";

  var length = window.prompt("Password Length (8-128):");

  var hasLower = window.confirm("Include Lowercase?");
  if (hasLower) {
    passwordCharSet += RandomFunc.lower
  }

  var hasUpper = window.confirm("Include Uppercase?");
  if (hasUpper) {
    passwordCharSet += RandomFunc.upper
  }

  var hasNumber = window.confirm("Include Numbers?");
  if (hasNumber) {
    passwordCharSet += RandomFunc.number
  }

  var hasSpecial = window.confirm("Include Special Characters?");
  if (hasSpecial) {
    passwordCharSet += RandomFunc.special
  }

  var charSetArray = [{lower}, {upper}, {number}, {special}].filter(item => Object.values(item)[0]);

  if(passwordCharSet === 0) {
    return;
  }
}

// Generate Random Characters

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() *26) + 97);
};

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() *26) + 65);
};

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() *10) + 48);
};

function getRandomSpecial() {
  var special = `!@#$%^&*(){}[]=<>?,.'`
  return special[Math.floor(Math.random() * special.length)];
};


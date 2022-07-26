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

const randomFunc = {
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
  if(length < 8 || length > 128) {
    window.alert("Please enter a value between 8-128.");
    return;
  }

  var hasLower = window.confirm("Include Lowercase?");
  if (hasLower) {
    passwordCharSet += randomFunc.lower
  }

  var hasUpper = window.confirm("Include Uppercase?");
  if (hasUpper) {
    passwordCharSet += randomFunc.upper
  }

  var hasNumber = window.confirm("Include Numbers?");
  if (hasNumber) {
    passwordCharSet += randomFunc.number
  }

  var hasSpecial = window.confirm("Include Special Characters?");
  if (hasSpecial) {
    passwordCharSet += randomFunc.special
  }

  if(passwordCharSet === "") {
    window.alert("Please choose atleast one character type.")
    return;
  }

  // Loop to create password
  for(var i = 0; i < length; i ++) {
    generatedPassword += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
  }

  return generatedPassword;
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


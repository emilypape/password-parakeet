// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// get password data from user
function getPasswordData() {
  var passwordData = {
    length: 0,
  };

  // Prompts for password length until user gives a valid number
  while(true) {
    var length = prompt('Enter a password length between 8 and 128');
    if (length >= 8 && length <= 128) {
      passwordData.length = length;
      break;
    }
    else {
      prompt('Please pick a valid length')
    }
  }



  return passwordData;
};

// generates password
function generatePassword() {
  var passwordObject = getPasswordData();

  var password = null; // use object to make password that fits criteria
  
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

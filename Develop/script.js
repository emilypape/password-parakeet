// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// get password data from user
function getPasswordData() {
  var passwordData = {
    length: 0,
    fontCase: '',
    number: false,
    specialChar: false
  };

  // Prompts for password length until user gives a valid number
  while(true) {
    var length = prompt('Choose a password length between 8 and 128');
    if (length >= 8 && length <= 128) {
      passwordData.length = length;
      break;
    }
    else {
      alert('Please pick a valid length!')
    }
  }

  //Prompt for case sensitivity until user gives a valid input
  while(true) {
    var fontCase = prompt('Would you like to include lower and uppercase letters? Please type UPPER, LOWER, or BOTH to choose.');
    fontCase = fontCase.toLowerCase();
    if (fontCase === 'upper' || fontCase === 'lower' || fontCase === 'both') {
      passwordData.fontCase = fontCase;
      break;
    }
    else {
      alert('Please enter a valid response!');
    }
  } 

  //Prompt for number inclusion until user gives a valid input
  while(true) {
    var number = prompt('Would you like to include numbers in your password? Type YES or NO.');
    number = number.toLowerCase();
    if (number === 'yes' || number === 'no') {
      passwordData.number = number; 
      break;
    }
    else {
      alert('Please enter a valid response!');
    }
  }

  //Prompt for special character inclusion until user gives a valid input
  while(true) {
    var specialChar = prompt('Would you like to include any special characters in your password? Type YES or NO.');
    specialChar = specialChar.toLowerCase();
    if (specialChar === 'yes' || specialChar === 'no') {
      passwordData.specialChar = specialChar;
      break;
    }
    else {
      alert('Please enter a valid response!');
    }
  }
  

  




  console.log(passwordData);
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

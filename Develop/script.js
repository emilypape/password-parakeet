// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//function to generate a random numeric value
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

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
  // use object to make password that fits criteria
  var passwordObject = getPasswordData();
  var password = '';

  var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var numbers = ['0','1','2','3','4','5','6','7','8','9'];
  var specialCharacters = ['!','@','#','$','%','^','&','*','(',')'];

  var included = [];

  if (passwordObject.fontCase === 'both') {
    password = password + lowerCase[randomNumber(0, lowerCase.length - 1)];
    password = password + upperCase[randomNumber(0, upperCase.length - 1)];
    included = included.concat(upperCase);
    included = included.concat(lowerCase);
  }

  if (passwordObject.fontCase === 'lower') {
    password = password + lowerCase[randomNumber(0, lowerCase.length - 1)];
    included = included.concat(lowerCase);
  }

  if (passwordObject.fontCase === 'upper') {
    password = password + upperCase[randomNumber(0, upperCase.length - 1)];
    included = included.concat(upperCase);
  }

  if (passwordObject.number === 'yes') {
    password = password + numbers[randomNumber(0, numbers.length -1)];
    included = included.concat(numbers);
  }

  if (passwordObject.specialChar === 'yes') {
    password = password + specialCharacters[randomNumber(0, specialCharacters.length - 1)];
    included = included.concat(specialCharacters);
  }

  // loop until we have a password that is as long as passwordObject.length
  for(var i = password.length; i < passwordObject.length; i++) {
    var randomCharacter = included[randomNumber(0, included.length - 1)];

    password = password + randomCharacter;
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");

  var password = generatePassword();

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

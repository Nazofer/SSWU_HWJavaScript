'use strict';

const generatePassword = () => {
  const allowedChars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789____';
  // Generate a random password of length between 6 and 20
  const passwordLength = Math.floor(Math.random() * 15) + 6;
  let password = '',
    numDigits = 0,
    numUppercase = 0,
    numUnderscore = 0;

  for (let i = 0; i < passwordLength; i++) {
    let char;
    do {
      char = allowedChars[Math.floor(Math.random() * allowedChars.length)];
    } while (
      // Check if the generated character is valid
      (i === 0 && char === '_') || // First character must not be underscore
      (i === passwordLength - 1 && numDigits === 0) || // Last character must be a digit
      (char === '_' && numUnderscore === 1) || // Only one underscore allowed
      (char >= '0' && char <= '9' && numDigits >= 5) || // Maximum of 5 digits allowed
      (char >= '0' && char <= '9' && password.includes(char)) || // Disallow consecutive digits
      (char >= 'A' && char <= 'Z' && numUppercase >= 2) // Minimum of 2 uppercase letters required
    );

    password += char;
    //count symbols for testing
    if (char >= '0' && char <= '9') numDigits++;
    else if (char >= 'A' && char <= 'Z') numUppercase++;
    else if (char === '_') numUnderscore++;
  }

  //regexp for duplicate digits
  const duplicateDigits = /(\d)\1/.test(password);
  //Log passing necessary tests
  console.log(
    numUnderscore === 1,
    numDigits <= 5,
    numUppercase >= 2,
    !duplicateDigits
  );
  // Check if the password contains any duplicate digits or doesn't have underscore
  if (duplicateDigits || !password.includes('_')) {
    return generatePassword();
  }

  return password;
};
console.log(generatePassword());

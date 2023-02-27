'use strict';

const isValid = (str) => {
  const parentheses = [];

  for (const letter of str) {
    if (letter === '(') parentheses.push('(');
    else if (letter === ')' && !parentheses.pop()) return false;
  }
  return true;
};

console.log(isValid('(())))))))'));
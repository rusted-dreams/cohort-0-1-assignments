/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase(); // convert the string to lowercase
  let newStr = [];

  // remove all the whitespace and special characters from the string:
  for (let i=0; i<str.length; i++) {
    if (str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122){
      newStr.push(str[i]);
    }
  }

  newStr = newStr.join('');

  // now reverse the string and check if the string is same as the reversed string:
  let strReversed = newStr.split('').reverse().join('');

  if (newStr == strReversed) {
    return true;
  } else return false;
}

isPalindrome("This is a string");
module.exports = isPalindrome;

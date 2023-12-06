/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  // Convert both the strings to lower case.
  let sortStr1 = str1.toLowerCase();
  let sortStr2 = str2.toLowerCase();

  // sorting both strings alphabetically:
  sortStr1 = sortStr1.split('').sort().join('');
  sortStr2 = sortStr2.split('').sort().join('');

  // if both sorted strings matches then its a anagram.
  if (sortStr1 === sortStr2) {
    return true;
  } else {
    return false;
  }
}

console.log(isAnagram('Hello', 'Olleh'));
module.exports = isAnagram;

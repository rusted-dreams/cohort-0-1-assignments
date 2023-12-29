// done

/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let count = 0;
  str = str.toLowerCase().split(''); // convert the string to lower case and then split it in array which contains all the elements.
  for (let i =0; i<str.length; i++) {
    if (['a', 'e', 'i', 'o', 'u'].includes(str[i]))
      count += 1;
  }
  // console.log(count);
  return count;
}

// countVowels('abspoty');

module.exports = countVowels;
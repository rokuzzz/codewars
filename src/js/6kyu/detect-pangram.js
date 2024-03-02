/**
 * Name: Detect Pangram
 *
 * Description:
 * A pangram is a sentence that contains every single letter of the alphabet at least once.
 * For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram,
 * because it uses the letters A-Z at least once (case is irrelevant).
 *
 * Given a string, detect whether or not it is a pangram. Return True if it is, False if
 * not. Ignore numbers and punctuation.
 *
 * Level: 6 kyu
 */

function isPangram(sentence) {
  const letterFrequency = {};
  const characters = sentence.toLowerCase().split('');

  for (let character of characters) {
    if (character.match(/[a-z]/i)) {
      letterFrequency[character] = (letterFrequency[character] || 0) + 1;
    }
  }

  return Object.keys(letterFrequency).length === 26;
}

// Test cases
console.log('1: ', isPangram('The quick brown fox jumps over the lazy dog.')); // true
console.log('2: ', isPangram('This isn not a pangram!')); // false
console.log('3: ', isPangram('abcdefghijklmopqrstuvwxyz')); // false
console.log('4: ', isPangram('ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ')); // true

/*
 * Name: Duplicate Encoder
 * Level: 6 kyu
 *
 * Description: The goal of this exercise is to convert a string to a new string where each
 * character in the new string is "(" if that character appears only once in the original string,
 * or ")" if that character appears more than once in the original string. Ignore capitalization
 * when determining if a character is a duplicate.
 */

export function duplicateEncode(word: string) {
  interface CharFrequencies {
    [char: string]: number;
  }
  const charFrequencies: CharFrequencies = {};

  for (let char of word.toLowerCase()) {
    charFrequencies[char] = (charFrequencies[char] || 0) + 1;
  }

  let encodedWord = '';
  for (let i = 0; i < word.length; i++) {
    const char = word[i].toLowerCase();
    encodedWord += charFrequencies[char] > 1 ? ')' : '(';
  }

  return encodedWord;
}

// Test cases
console.log('1: ', duplicateEncode('din')); // "((("
console.log('2: ', duplicateEncode('recede')); // "()()()"
console.log('3: ', duplicateEncode('Success')); // ")())())"
console.log('4: ', duplicateEncode('(( @')); // "))(("

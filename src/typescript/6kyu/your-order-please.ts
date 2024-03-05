/**
 * Name: Your order, please
 *
 * Description:
 * Your task is to sort a given string. Each word in the string will contain a single
 * number. This number is the position the word should have in the result.
 *
 * Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
 * If the input string is empty, return an empty string. The words in the input String will
 * only contain valid consecutive numbers.
 *
 * Level: 6 kyu
 */

export function order(sentence: string): string {
  if (sentence.length === 0) return '';

  const wordsArray = sentence.split(' ');
  const sortedWords: string[] = [];

  wordsArray.forEach((word) => {
    const wordPosition = parseInt(word.match(/\d/)?.[0] ?? '0');
    sortedWords[wordPosition - 1] = word;
  });

  return sortedWords.join(' ');
}

// Test cases
console.log('1: ', order('is2 Thi1s T4est 3a')); // 'Thi1s is2 3a T4est'
console.log('2: ', order('4of Fo1r pe6ople g3ood th5e the2')); // 'Fo1r the2 g3ood 4of th5e pe6ople'
console.log('3: ', order('')); // ''

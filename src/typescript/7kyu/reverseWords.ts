/* 
* Name: Reverse words
* Description: Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
* Level: 7 kyu
*/

export function reverseWords(str: string): string {
  const wordsArray = str.split(' ')
  const reversedWordsArray = wordsArray.map(word => word.split('').reverse().join(''))

  return reversedWordsArray.join(' ')
}
/* 
* Name: Stop gninnipS My sdroW!
* Description: Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
* Level: 6 kyu
*/

export function spinWords(words: string): string {
  const wordsArr = words.split(' ')

  const reversedWordsArr: string[] = []
  wordsArr.map( word => {
    if(word.length >= 5) {
      reversedWordsArr.push(word.split('').reverse().join(''))
     } else {
       reversedWordsArr.push(word)
     }
  })

  return reversedWordsArr.join(' ')
}
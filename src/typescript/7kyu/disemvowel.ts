/* 
* Name: Disemvowel Trolls
* Description: Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
* Level: 7 kyu
*/

export function disemvowel(str: string): string {
  const vowellessCharacters: string[] = []
    
    str.split('').map( character => {
      if (character !== 'a' && character !== 'A' &&
          character !== 'e' && character !== 'E' &&
          character !== 'i' && character !== 'I' &&
          character !== 'o' && character !== 'O' &&
          character !== 'u' && character !== 'U') vowellessCharacters.push(character)
    })
    
    return vowellessCharacters.join('');
}
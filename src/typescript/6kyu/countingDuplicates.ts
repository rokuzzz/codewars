/* 
* Name: Counting Duplicates
* Description: Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
* Level: 6 kyu
*/

interface CharacterCountDocumentation { 
  [key: string]: number 
}

export function duplicateCount(text: string): number{
  // convert given string to lower case
  const lowerCaseText = text.toLowerCase() 
  
  // count and write the number of each character in a string
  const charCountDocs: CharacterCountDocumentation = {}
  for(let i = 0; i < lowerCaseText.length; i++) {
    const char = lowerCaseText.charAt(i)
    // if such a character already exists in the object,
    // then increase its number by 1,
    // otherwise just add to the object it with a quantity of 1
    charCountDocs[char] = (Object.hasOwn(charCountDocs, char) 
      ? charCountDocs[char] + 1 
      : 1
    )
  }
  
  // count the number of repeated characters and return it
  let result: number = 0
  for (const key in charCountDocs) {
    if (charCountDocs[key] > 1) result += 1
  }
  
  return result
}
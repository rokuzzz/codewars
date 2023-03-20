/* 
* Name: Sum of Digits / Digital Root
* Description: Digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
* Level: 6 kyu
*/

export const digitalRoot = (n:number):number => {
  let sum = n
  const initialValue = 0
  
  while (sum.toString().length > 1) {
    sum = sum.toString()
      .split('')
      .reduce((accumulator, digit) => {
      
      return accumulator + Number(digit)
    }, initialValue)
  }
  
  return sum
};
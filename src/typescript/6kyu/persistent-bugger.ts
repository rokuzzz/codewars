/**
 * Name: Persistent Bugger
 * Description: Write a function, persistence, that takes in a positive parameter num and returns
 * its multiplicative persistence, which is the number of times you must multiply the digits in num
 * until you reach a single digit.
 * Level: 6 kyu
 */

export function persistence(num: number): number {
  if (num.toString().length === 1) return 0;

  let count = 0;

  while (num.toString().length > 1) {
    let arr = num.toString().split('');
    num = arr.reduce((product, digit) => product * parseInt(digit), 1);
    count++;
  }

  return count;
}

// Test Cases
console.log('1: ', persistence(39)); // 3
console.log('2: ', persistence(999)); // 4
console.log('3: ', persistence(4)); // 0

/**
 * Name: Simple multiplication
 *
 * Description:
 * This kata is about multiplying a given number by eight if it is an even number and by
 * nine otherwise.
 *
 * Level: 8 kyu
 */

export function simpleMultiplication(num: number): number {
  return num % 2 ? num * 9 : num * 8;
}

// Test cases
console.log('1: ', simpleMultiplication(2)); // 16
console.log('2: ', simpleMultiplication(1)); // 9
console.log('3: ', simpleMultiplication(8)); // 64
console.log('4: ', simpleMultiplication(4)); // 32

/**
 * Name: Find the smallest integer in the array
 *
 * Description:
 * Given an array of integers your solution should find the smallest integer.
 *
 * Level: 8 kyu
 */

export function findSmallestInt(args: number[]): number {
  return args.sort(function (a, b) {
    return a - b;
  })[0];
}

// Test cases
console.log('1: ', findSmallestInt([78, 56, 232, 12, 8])); // 8
console.log('2: ', findSmallestInt([78, 56, 232, 12, 18])); // 12
console.log('3: ', findSmallestInt([78, 56, 232, 412, 228])); // 56
console.log('4: ', findSmallestInt([78, 56, 232, 12, 0])); // 0

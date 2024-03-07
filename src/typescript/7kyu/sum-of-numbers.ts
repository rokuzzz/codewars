/**
 * Name: Beginner Series #3 Sum of Numbers
 *
 * Description:
 * Given two integers a and b, which can be positive or negative, find the sum of all the
 * integers between and including them and return it. If the two numbers are equal return a
 * or b.
 *
 * Note: a and b are not ordered!
 *
 * Level: 7 kyu
 */

export function getSum(a: number, b: number): number {
  if (a === b) return a;

  let sum = 0;

  const start = Math.min(a, b);
  const end = Math.max(a, b);

  for (let i = start; i <= end; i++) {
    sum += i;
  }

  return sum;
}

// Test cases
console.log('1: ', getSum(1, 0)); // 1
console.log('2: ', getSum(1, 2)); // 3
console.log('3: ', getSum(0, 1)); // 1
console.log('4: ', getSum(1, 1)); // 1
console.log('5: ', getSum(-1, 0)); // -1
console.log('6: ', getSum(-1, 2)); // 2

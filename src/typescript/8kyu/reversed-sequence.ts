/**
 * Name: Reversed sequence
 *
 * Description:
 * Build a function that returns an array of integers from n to 1 where n>0.
 *
 * Example : n=5 --> [5,4,3,2,1]
 *
 * Level: 8 kyu
 */

export const reverseSeq = (n: number): number[] => {
  const sequence: number[] = [];
  for (let i = n; i > 0; i--) {
    sequence.push(i);
  }

  return sequence;
};

// Test cases
console.log('1: ', reverseSeq(3)); // [3, 2, 1]
console.log('2: ', reverseSeq(5)); // [5, 4, 3, 2, 1]
console.log('3: ', reverseSeq(10)); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

/**
 * Name: Odd or even?
 *
 * Description:
 * Given a list of integers, determine whether the sum of its elements is odd or even.
 *
 * Give your answer as a string matching "odd" or "even".
 *
 * If the input array is empty consider it as: [0] (array with a zero).
 *
 * Level: 7 kyu
 */

export function oddOrEven(array: number[]) {
  const initialValue = 0;
  const sum = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );

  return sum % 2 ? 'odd' : 'even';
}

// Test cases
console.log('1: ', oddOrEven([0])); // even
console.log('2: ', oddOrEven([1])); // odd
console.log('3: ', oddOrEven([0, 1, 5])); // even
console.log('4: ', oddOrEven([0, 1, 3])); // even
console.log('5: ', oddOrEven([1023, 1, 2])); // even
console.log('6: ', oddOrEven([1023, 1, 3])); // odd

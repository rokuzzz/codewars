/**
 * Name: Descending Order
 *
 * Description:
 * Your task is to make a function that can take any non-negative integer as an argument
 * and return it with its digits in descending order. Essentially, rearrange the digits to
 * create the highest possible number.
 *
 * Level: 7 kyu
 */

function insertionSort(digits) {
  for (let index = 1; index < digits.length; index++) {
    let currentDigit = digits[index];
    let insertionPosition;

    for (
      insertionPosition = index - 1;
      insertionPosition >= 0 && digits[insertionPosition] > currentDigit;
      insertionPosition--
    ) {
      digits[insertionPosition + 1] = digits[insertionPosition];
    }

    digits[insertionPosition + 1] = currentDigit;
  }
  return digits;
}

function descendingOrder(n) {
  const digits = n.toString().split('');
  const sortedDigits = insertionSort(digits);
  return parseInt(sortedDigits.reverse().join(''), 10);
}

// Test cases:
console.log('1: ', descendingOrder(42145)); // 54421
console.log('2: ', descendingOrder(145263)); // 654321
console.log('3: ', descendingOrder(123456789)); // 987654321

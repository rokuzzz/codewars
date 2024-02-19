/*
 * Name: Digitalize
 * Level: 8 kyu
 *
 * Description: Convert number to reversed array of digits. Given a random non-negative number,
 * you have to return the digits of this number within an array in reverse order.
 */

export const digitize = (n: number): number[] => {
  let s = n.toString();

  const reverseString = (str: string): string => {
    if (str.length === 1) return str;

    return str[str.length - 1] + reverseString(str.slice(0, -1));
  };

  s = reverseString(s);

  return s.split('').map((digit) => parseInt(digit));
};

// Test cases
console.log('1: ', digitize(35231)); // [1,3,2,5,3]
console.log('2: ', digitize(23582357)); // [7,5,3,2,8,5,3,2]
console.log('3: ', digitize(984764738)); // [8,3,7,4,6,7,4,8,9]
console.log('4: ', digitize(45762893920)); // [0,2,9,3,9,8,2,6,7,5,4]
console.log('5: ', digitize(548702838394)); // [4,9,3,8,3,8,2,0,7,8,4,5]

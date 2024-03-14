/**
 * Name: Convert a Boolean to a String
 *
 * Description:
 * Implement a function which convert the given boolean value into its string representation.
 *
 * Note: Only valid inputs will be given.
 *
 * Level: 8 kyu
 */

export const booleanToString = (b: boolean): string => {
  return b.toString();
};

// Test cases
console.log('1: ', booleanToString(true));
console.log('1: ', booleanToString(false));

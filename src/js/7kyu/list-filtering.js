/**
 * Name: List Filtering
 *
 * Description:
 * In this kata you will create a function that takes a list of non-negative integers and
 * strings and returns a new list with the strings filtered out.
 *
 * Level: 7 kyu
 */

function filter_list(l) {
  return l.filter((val) => typeof val === 'number');
}

// Test cases
console.log('1: ', filter_list([1, 2, 'a', 'b'])); // [1, 2]
console.log('2: ', filter_list([1, 'a', 'b', 0, 15])); // [1, 0, 15]
console.log('3: ', filter_list([1, 2, 'aasf', '1', '123', 123])); // [1, 2, 123]

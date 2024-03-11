/**
 * Name: Sum without highest and lowest number
 *
 * Description:
 * The highest or lowest element respectively is a single element at each edge, even if 
 * there are more than one with the same value.
 * 
 * Mind the input validation.
 *
 * Level: 8 kyu
 */

export function sumArray(array: number[] | null): number {
  if (array === null) return 0;

  array.sort((a, b) => a - b);

  let sum = 0;

  for (let i = 1; i < array.length - 1; i++) {
    sum += array[i];
  }

  return sum;
}

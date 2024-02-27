/**
 * Name: Shortest Word
 *
 * Description:
 * Simple, given a string of words, return the length of the shortest word(s).
 *
 * String will never be empty and you do not need to account for different data types.
 *
 * Level: 7 kyu
 */

export function findShort(s: string): number {
  let words = s.split(' ');
  let shortestLength = Infinity;

  for (let wordIndex = 0; wordIndex < s.split(' ').length; wordIndex++) {
    if (shortestLength > words[wordIndex].length)
      shortestLength = words[wordIndex].length;
  }

  return shortestLength;
}

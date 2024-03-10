/**
 * Name: Keep Hydrated!
 *
 * Description:
 * Nathan loves cycling.
 *
 * Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per
 * hour of cycling.
 *
 * You get given the time in hours and you need to return the number of litres Nathan will
 * drink, rounded to the smallest value.
 *
 * Level: 8 kyu
 */

export function litres(time: number): number {
  return Math.floor(time * 0.5);
}

// Test cases
console.log(litres(3)); // 1
console.log(litres(6.7)); // 3
console.log(litres(11.8)); // 5

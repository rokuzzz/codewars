/*
 * Name: Growth of a Population
 * Level: 7 kyu
 *
 * Description: In a small town the population is p0 = 1000 at the beginning of a year. The
 * population regularly increases by 2 percent per year and moreover 50 new inhabitants per year
 * come to live in the town. How many years does the town need to see its population greater than
 * or equal to p = 1200 inhabitants?
 * 
 * More generally given parameters:
 * p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)
 * 
 * the function nb_year should return n number of entire years needed to get a population greater
 * or equal to p.
 */

export const nbYear = (
  p0: number,
  percent: number,
  aug: number,
  p: number
): number => {
  let counter = 0;

  while (p0 < p) {
    p0 = Math.floor(p0 + (p0 * percent) / 100) + Math.floor(aug);

    counter++;
  }

  return counter;
};

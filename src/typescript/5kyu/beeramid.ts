/**
 * Name: Beeramid
 *
 * Description:
 * Let's pretend your company just hired your friend from college and paid you a referral
 * bonus. Awesome! To celebrate, you're taking your team out to the terrible dive bar next
 * door and using the referral bonus to buy, and build, the largest three-dimensional beer
 * can pyramid you can. And then probably drink those beers, because let's pretend it's
 * Friday too.
 *
 * A beer can pyramid will square the number of cans in each level - 1 can in the top
 * level, 4 in the second, 9 in the next, 16, 25...
 *
 * Complete the beeramid function to return the number of complete levels of a beer can
 * pyramid you can make, given the parameters of:
 * 1. your referral bonus, and
 * 2. the price of a beer can
 *
 * Level: 5 kyu
 */

export function beeramid(bonusAmount: number, beerPrice: number): number {
  if (bonusAmount < beerPrice) return 0;

  const totalCansAffordable = Math.floor(bonusAmount / beerPrice);
  let cansUsed = 0;
  let currentLevel = 0;

  for (
    currentLevel = 1;
    cansUsed + currentLevel * currentLevel <= totalCansAffordable;
    currentLevel++
  ) {
    cansUsed += currentLevel * currentLevel;
  }

  return currentLevel - 1;
}

// Test cases
console.log('1: ', beeramid(1500, 2)); // 12
console.log('2: ', beeramid(5000, 3)); // 16

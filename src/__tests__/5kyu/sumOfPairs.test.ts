import type * as TestFunctions from '../../typescript/5kyu/sumOfPairs'

const { sumPairs } = jest.requireActual<typeof TestFunctions>("../../typescript/5kyu/sumOfPairs.ts")

const successCases = [
  {
    id: 0,
    input: {
      ints: [4, 3, 2, 3, 4],
      targetSum: 6
    },
    output: [4, 2]
  },
  {
    id: 1,
    input: {
      ints: [0, 0, -2, 3],
      targetSum: 2
    },
    output: undefined
  },
  {
    id: 2,
    input: {
      ints: [10, 5, 2, 3, 7, 5],
      targetSum: 10
    },
    output: [3, 7]
  },
  {
    id: 3,
    input: {
      ints: [11, 3, 7, 5],
      targetSum: 10
    },
    output: [3, 7]
  }
]

describe('Test sumParirs function from sumOfPairs.ts file', () => {
  test.each(successCases)('$id ($input.ints, $input.targetSum) should return $output', ({input, output}) => {
    expect(sumPairs(input.ints, input.targetSum)).toStrictEqual(output)
  })
})
import type * as TestFunctions from '../../typescript/6kyu/multiplesOfThreeOrFive'

const { multiplesOfThreeOrFive } = jest.requireActual<typeof TestFunctions>("../../typescript/6kyu/multiplesOfThreeOrFive.ts")

const successCases = [
  {
    id: 0,
    input: 10,
    output: 23
  },
  {
    id: 1,
    input: 20,
    output: 78
  },
  {
    id: 2,
    input: 50,
    output: 543
  },
  {
    id: 3,
    input: 100,
    output: 2318
  },
]


describe('Test multiplesOfThreeOrFive function', () => {
  test.each(successCases)('$id multiplesOfThreeOrFive($input) => returns $output', ({input, output}) => {
    expect(multiplesOfThreeOrFive(input)).toBe(output)
  })
})
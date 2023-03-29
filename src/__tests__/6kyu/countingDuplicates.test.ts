import type * as TestFunctions from '../../typescript/6kyu/countingDuplicates'

const { duplicateCount } = jest.requireActual<typeof TestFunctions>("../../typescript/6kyu/countingDuplicates.ts")

const successCases = [
  {
    id: 0,
    input: 'abcde',
    output: 0, 
    comment: 'no characters repeats more than once'
  },
  {
    id: 1,
    input: 'aabbcde',
    output: 2,
    comment: "'a' and 'b'"
  },
  {
    id: 2,
    input: 'aabBcde',
    output: 2,
    comment: "'a' occurs twice and 'b' twice - `b` and `B`"
  },
  {
    id: 3,
    input: 'indivisibility',
    output: 1,
    comment: "'i' occurs six times"
  },
  {
    id: 4,
    input: 'Indivisibilities',
    output: 2,
    comment: "'i' occurs seven times and 's' occurs twice"
  },
  {
    id: 5,
    input: 'aA11',
    output: 2,
    comment: "'a' and '1'"
  },
  {
    id: 6,
    input: 'ABBA',
    output: 2,
    comment: "'A' and 'B' each occur twice"
  }
]

describe('Test duplicateCount function from countingDuplicates.ts file', () => {
  test.each(successCases)('$id $input -> $output ($comment)', ({input, output}) => {
    expect(duplicateCount(input)).toBe(output)
  })
})
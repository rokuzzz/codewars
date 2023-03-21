import type * as TestFunctions from '../../typescript/7kyu/reverseWords'

const { reverseWords } = jest.requireActual<typeof TestFunctions>("../../typescript/7kyu/reverseWords.ts")

const successCases = [
  {
    id: 0,
    input: 'This is an example!',
    output: 'sihT si na !elpmaxe'
  },
  {
    id: 1,
    input: 'double  spaces',
    output: 'elbuod  secaps'
  }
]

describe('Test reverseWords function', () => {
  test.each(successCases)('$id "$input" ==> "$output"', ({input, output}) => {
    expect(reverseWords(input)).toBe(output)
  })
})
import type * as TestFunctions from '../../typescript/6kyu/spinWords'

const { spinWords } = jest.requireActual<typeof TestFunctions>("../../typescript/6kyu/spinWords.ts")

const successCases = [
  {
    id: 0,
    input: 'Hey fellow warriors',
    output: 'Hey wollef sroirraw'
  },
  {
    id: 1,
    input: 'This is a test',
    output: 'This is a test'
  },
  {
    id: 2,
    input: 'This is another test',
    output: 'This is rehtona test'
  }
]

describe('Test spinWords function', () => {
  // Should twist words whose length is greater than or equal to five letters from the given string
  test.each(successCases)('$id spinWords("$input") => returns "$output"', ({input, output}) => {
    expect(spinWords(input)).toBe(output)
  })
})
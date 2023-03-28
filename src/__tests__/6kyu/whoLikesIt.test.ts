import type * as TestFunctions from '../../typescript/6kyu/whoLikesIt'

const { likes } = jest.requireActual<typeof TestFunctions>("../../typescript/6kyu/whoLikesIt.ts")

const successCases = [
  {
    id: 0,
    input: [],
    output: 'no one likes this'
  },
  {
    id: 1,
    input: ['Peter'],
    output: 'Peter likes this'
  },
  {
    id: 2,
    input: ['Jacob', 'Alex'],
    output: 'Jacob and Alex like this'
  },
  {
    id: 3,
    input: ['Max', 'John', 'Mark'],
    output: 'Max, John and Mark like this'
  },
  {
    id: 4,
    input: ['Alex', 'Jacob', 'Mark', 'Max'],
    output: 'Alex, Jacob and 2 others like this'
  }
]

describe('Test likes function from whoLikesIt.ts file', () => {
  test.each(successCases)('$id $input --> "$output"', ({input, output}) => {
    expect(likes(input)).toBe(output)
  })
})
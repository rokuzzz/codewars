import type * as TestFunctions from '../../typescript/6kyu/digitalRoot'

const { digitalRoot } = jest.requireActual<typeof TestFunctions>("../../typescript/6kyu/digitalRoot.ts")

const successCases = [
  {
    id: 0,
    input: 16,
    output: 7
  },
  {
    id: 1,
    input: 942,
    output: 6
  },
  {
    id: 2,
    input: 132189,
    output: 6
  },
  {
    id: 3,
    input: 493193,
    output: 2
  },
]

describe('Test digitalRoot function', () => {
  test.each(successCases)('$id $input --> $output', ({input, output}) => {
    expect(digitalRoot(input)).toBe(output)
  })
})
import type * as TestFunctions from '../../typescript/6kyu/makeTheDeadfishSwim'

const { parse } = jest.requireActual<typeof TestFunctions>("../../typescript/6kyu/makeTheDeadfishSwim.ts")

const successCases = [
  {
    id: 0,
    input: 'iiisdoso',
    output: [8, 64]
  },
  {
    id: 1,
    input: 'dddoso',
    output: [-3, 9]
  },
  {
    id: 2,
    input: 'aaaiiosssodo',
    output: [2, 256, 255]
  }
]

describe('Test parse function from makeTheDeadfishSwim.ts file', () => {
  test.each(successCases)('$id parse("$input") => $output', ({input, output}) => {
    expect(parse(input)).toStrictEqual(output)
  })
})
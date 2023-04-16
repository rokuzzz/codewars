import type * as TestFunctions from '../../typescript/5kyu/RGBToHexConversion'

const { rgb } = jest.requireActual<typeof TestFunctions>("../../typescript/5kyu/RGBToHexConversion.ts")

const successCases = [
  {
    id: 0,
    input: {
      r: 255,
      g: 255,
      b: 255
    },
    output: 'FFFFFF'
  },
  {
    id: 1,
    input: {
      r: 255,
      g: 255,
      b: 300
    },
    output: 'FFFFFF'
  },
  {
    id: 2,
    input: {
      r: 0,
      g: 0,
      b: 0
    },
    output: '000000'
  },
  {
    id: 3,
    input: {
      r: 148,
      g: 0,
      b: 211
    },
    output: '9400D3'
  },
]

describe('Test solution to «RGB To Hex Conversion» challenge', () => {
  test.each(successCases)('$id: rgb($input.r, $input.g, $input.b) should return «$output»', ({input, output}) => {
    expect(rgb(input.r, input.g, input.b)).toBe(output)
  })
})
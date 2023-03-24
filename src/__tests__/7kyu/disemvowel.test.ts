import type * as TestFunctions from '../../typescript/7kyu/disemvowel'

const { disemvowel } = jest.requireActual<typeof TestFunctions>("../../typescript/7kyu/disemvowel.ts")

describe('Test disemvowel function', () => {
  test('Should remove all vowels from the string', () => {
    expect(disemvowel('This website is for losers LOL!')).toBe('Ths wbst s fr lsrs LL!')
  })
})
import { MORSE_CODE } from './preloaded';
export function decodeMorse(morseCode: string): string {
  const decodedCharacters: string[] = []
  morseCode.split(' ').map(symbol => {
    if (MORSE_CODE[symbol] === undefined) {
      decodedCharacters.push(' ')
    } else {
      decodedCharacters.push(MORSE_CODE[symbol])
    }
  })
  
  // remove all double spaces in a string, as well as any surrounding spaces
  const result = decodedCharacters.join('').replace(/\s+/g, ' ').trim()
  
  return result
}
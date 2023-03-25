/* 
* Name: Make the Deadfish Swim
* Description: Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.
* Level: 6 kyu
*/

export function parse(data: string): number[] {
  const result: number[] = []
  let value: number = 0
  
  data.split('').map((command) => {
    if (command == 'i') {
      value = value + 1
    } else if ( command == 'd') {
      value = value - 1
    } else if (command == 's') {
      value = Math.pow(value, 2)
    } else if (command == 'o') {
      result.push(value) 
    }
  })
  
  return result
}
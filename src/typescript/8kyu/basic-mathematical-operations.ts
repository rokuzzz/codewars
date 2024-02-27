/**
 * Name: Basic Mathematical Operations
 *
 * Description:
 * Your task is to create a function that does four basic mathematical operations.
 *
 * The function should take three arguments - operation(string/char), value1(number), value2
 * (number).
 * The function should return result of numbers after applying the chosen operation.
 *
 * Level: 8 kyu
 */

export function basicOp(
  operation: string,
  value1: number,
  value2: number
): number {
  return handleArithmeticOperation(operation, value1, value2);
}

function handleArithmeticOperation(
  operator: string,
  a: number,
  b: number
): number {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      if (b === 0) {
        throw new Error('Cannot divide by zero.');
      }
      return a / b;
    default:
      throw new Error(`Unsupported operator: ${operator}`);
  }
}

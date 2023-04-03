function componentToHex(c: number) {
  const hex = c.toString(16);
  const result = hex.length == 1 ? "0" + hex : hex
  
  return result.toString().toUpperCase();
}

export function rgb(r: number, g: number, b: number): string {
  r < 0 ? r = 0 : r > 255 ? r = 255 : r;  // check if
  g < 0 ? g = 0 : g > 255 ? g = 255 : g;  // any of input values
  b < 0 ? b = 0 : b > 255 ? b = 255 : b;  // are out of rgb range
    
  const result = `${componentToHex(r) + componentToHex(g) + componentToHex(b)}`

  return result
}
export function sumPairs(ints: number[], s: number): [number, number] | void {  
  // find all pairs that give the given sum by addition, 
  // store these pairs in the allPairs array, 
  // and store all indexes of the second elements of
  // these pairs in the allIndexesOfTheSecondElements array
  const allPairs: number[][] = [], 
        allIndexesOfTheSecondElements: number[] = [], 
        intsLength = ints.length
  for (let i = 0; i < intsLength; i++) {
    for (let j = 0; j < intsLength; j++) {
      if (i !== j && j > i) {
        if (ints[i] + ints[j] == s) {
          allPairs.push([ints[i], ints[j]])
          allIndexesOfTheSecondElements.push(j)
        }
      }
    }
  }
  
  // if there are no pairs giving the given sum by addition,
  // return undefined
  if (allPairs.length == 0) return undefined
  
  // get second elemen with the lowest index
  const secondElementWithLowestIndex: number = ints[Math.min(...allIndexesOfTheSecondElements)]
  
  const allPairsLength = allPairs.length
  for (let i = 0; i < allPairsLength; i++) {
    if (allPairs[i][1] == secondElementWithLowestIndex) {
      const result: [number, number] = [0, 0]
      for (let j = 0; j < 2; j++) {
        result.push(allPairs[i][j])
      }
      result.splice(0, 2)
      
      return result
    }
  }
}
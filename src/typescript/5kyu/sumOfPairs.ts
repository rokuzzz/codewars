export function sumPairs(ints: number[], targetSum: number): [number, number] | void {  
  // linear time complexity, O(n)
  const hashTable = new Map();
  for (let i in ints) {
    const firstElement = targetSum - ints[i] 
    if (hashTable.get(firstElement)) {
      return [ firstElement, ints[i] ]
    } else {
      hashTable.set(ints[i], i)
    }
  }
  
  // Straight-forward approach, O(n^2)
  // // find all pairs that give the given sum by addition, 
  // // store these pairs in the allPairs array, 
  // // and store all indexes of the second elements of
  // // these pairs in the allIndexesOfTheSecondElements array
  // const allPairs: number[][] = [], 
  //       allIndexesOfTheSecondElements: number[] = [], 
  //       intsLength = ints.length
  // for (let i = 0; i < intsLength; i++) {
  //   for (let j = 0; j < intsLength; j++) {
  //     if (i !== j && j > i) {
  //       if (ints[i] + ints[j] == s) {
  //         allPairs.push([ints[i], ints[j]])
  //         allIndexesOfTheSecondElements.push(j)
  //       }
  //     }
  //   }
  // }
  
  // // if there are no pairs giving the given sum by addition,
  // // return undefined
  // if (allPairs.length == 0) return undefined
  
  // // get second element with the lowest index
  // const secondElementWithLowestIndex: number = ints[Math.min(...allIndexesOfTheSecondElements)]
  
  // const allPairsLength = allPairs.length
  // for (let i = 0; i < allPairsLength; i++) {
  //   if (allPairs[i][1] == secondElementWithLowestIndex) {
  //     const result: [number, number] = [0, 0]
  //     for (let j = 0; j < 2; j++) {
  //       result.push(allPairs[i][j])
  //     }
  //     result.splice(0, 2)
      
  //     return result
  //   }
  // }
}
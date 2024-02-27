function getCountedNucleotides(genCode: string) {
  const nucleotidesArray = genCode.toUpperCase().split('');
  const nucleotideFrequencies: { [key: string]: number } = {
    A: 0, // Adenine
    C: 0, // Cytosine
    G: 0, // Guanine
    T: 0, // Thymine
  };

  for (let nucleotide of nucleotidesArray) {
    nucleotideFrequencies[nucleotide]++;
  }

  return nucleotideFrequencies;
}

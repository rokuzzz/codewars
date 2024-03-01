/**
 * Name: Counting DNA Nucleotides
 *
 * Description:
 * For a given DNA genetic code represented by a string, count the number of times the
 * letters A (adenine), C (cytosine), G (guanine) and T (thymine) appears and return and
 * object.
 *
 * The input string may contain both upper and lower case characters.
 *
 * Level: 6 kyu
 */

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

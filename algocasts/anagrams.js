// Check if two provided strings are anagrams. Only consider alphanumeric characterc and consider capital letters as lowercase

const clean = str => str.replace(/[^\w]/g,'').toLowerCase()
const getCharMap = str => str
  .split('')
  .reduce((map, char) => ({ 
    [char]: map[char]? ++map[char] : 1,
    ...map
   }),{})

module.exports = (a, b) => {
  const strA = clean(a)
  const strB = clean(b)

  // if length of cleaned strings not equal, return false
  if (strA.length !== strB.length) return false

  // get and compare maps
  const mapA = getCharMap(strA)
  const mapB = getCharMap(strB)

  for(let key in mapA) {
    // return as soon as mismatch found
    if(mapB[key] !== mapA[key]) return false
  }

  return true
}
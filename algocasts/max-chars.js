// return the most commonly used char in a string

module.exports = str => {
  const charMap = {}

  // map chars
  for(let char of str) {
    // create or increase count of current char in the map
    if (charMap[char]) ++charMap[char]
    else charMap[char] = 1
  }

  // return character whose mapped count equals the max found in all mapped values
  return Object.keys(charMap).find(char => charMap[char] === Math.max(...Object.values(charMap)))
}
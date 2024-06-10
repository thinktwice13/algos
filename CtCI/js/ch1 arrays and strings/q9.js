
const isInputInvalid = (a,b) => !a || !b

const isSubstring = (str, substr) => {
  return str.includes(substr);
}

module.exports = (a,b) => {
  if (isInputInvalid(a,b)) throw new Error('invalid input');
  if (a.length !== b.length) return false

  return isSubstring(a + a, b)

}
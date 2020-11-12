module.exports = str => str
  .split(' ')
  .map(word => word[0].toUpperCase() + word.slice(1, str.length))
  .join(' ')
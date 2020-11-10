/**
 * Returns chunks of provided array and provided chunk size
 *  @param {any[]} arr
 * @param {number} size
 */
module.exports = (arr, size) => {
  const chunks = []

  for (let item of arr) {
    // get last item in chunks list
    let currentChunk = chunks[chunks.length - 1]
    // if full of doesn't exisr, create new
    if (!currentChunk || currentChunk.length === size) {
      // // this does NOT work
      // currentChunk = []
      // chunks.push([]])
      chunks.push([]])
      currentChunk = chunks[chunks.length - 1]
    }
    currentChunk.push(item)
  }

  return chunks
}


function solution(H) {
  let blockCount = 0
  const stack = []

  /**
   * Process each column by recording its size and saving to temporary stack
   * For each, pop the stack until <= to current size is found
   * If last in stack equals current size, range between equal-sized columns can be used as single block (do not record again)
   * If last in stack smaller, record as new block
   */
  for (let colHeight of H) {
    let lastInStack = stack[stack.length - 1]
    while (lastInStack > colHeight) {
      stack.pop()
      lastInStack = stack[stack.length - 1]
    }

    if (colHeight > (lastInStack || 0)) {
      stack.push(colHeight)
      blockCount++;
    }
  } 

  return blockCount
}

// TEST
const h = [8, 8, 5, 7, 9, 8, 7, 4, 8]
const res = solution(h)
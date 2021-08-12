function solution(H) {
  let blockCount = 0;
  const stack = [];

  /**
   * Process each column by recording its size and saving to temporary stack
   * For each, pop the stack until <= to current size is found
   * If last in stack equals current size, range between equal-sized columns can be used as single block (do not record again)
   * If last in stack smaller, record as new block
   */
  for (let colHeight of H) {
    // Remove all items in stack higher than current stone block
    while (stack[stack.length - 1] > colHeight) {
      stack.pop();
    }

    /**
     * If current stone block is higher than the last item in stack (or there is no stack),
     * add to stack and to block count
     */
    if (colHeight > (stack[stack.length - 1] || 0)) {
      stack.push(colHeight);
      blockCount++;
    }
  }

  return blockCount;
}

// TEST
const h = [8, 8, 5, 7, 9, 8, 7, 4, 8];
const res = solution(h);

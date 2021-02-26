function solution(A, B) {
  const sizes = A
  const directions = B
  const survived = []
  const upstreamStack = []

  for (let i = 0; i < sizes.length; i++) {
    const fish = sizes[i]
    const direction = directions[i] // 0 upstream

    // Survival criteria when direction upstream: No bigger fish in upstream stack
    const isUpstream = direction === 0
    if (isUpstream) {
      // Check upstream stack for fish swimming downstream
      // If upstrem stack empty, survived
      let nextUpstream = upstreamStack[upstreamStack.length - 1];
      // As long as fish in the upstream stack are smaller, eat them
      while (nextUpstream < fish) {
        upstreamStack.pop()
        nextUpstream = upstreamStack[upstreamStack.length - 1];
      }
      if (!upstreamStack.length) survived.push(fish)
      // Be eaten and continue to next fish
    } else {
      // Add to upstream stack
      upstreamStack.push(fish)
    }
  }

  return survived.length + upstreamStack.length
}

// TEST 
const sizes = [4, 3, 2, 1, 5]
const directions = [0, 1, 1, 0, 0]
const e = solution(sizes, directions)

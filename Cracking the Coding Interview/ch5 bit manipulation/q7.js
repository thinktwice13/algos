// Pairwise swap. Swap even and odd buts (0 and 1, 2 and 3)

const oddMask = 0xaaaaaaaa
const evenMask = 0x55555555

const swap = x => {
    // Use OR combine the sequence
  const swapped = ((x & oddMask) >>> 1)  // Shift masked odd bits 
    | ((x & evenMask) << 1) // Shift masked even bits

  return { x: x.toString(2), swapped: swapped.toString(2)}
}

console.log(swap(108))
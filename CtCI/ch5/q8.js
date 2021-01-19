// draw a line on a screen from x1,y to x2,y (screen is array of bytes where width is divisible by 8)

const drawLine = (screen, width, x1, x2, y) => {
  const firstFullByte = Math.floor(x1 / 8) + 1;
  const startOffset = x1 % 8;

  const lastFull = Math.floor(x2 / 8) - 1;
  const endOffset = x2 % 8;

  // Fill all full bytes
  for (let b = firstFullByte; b <= lastFull; b++) {
    screen[b] = 0xFF
  }

  // Set first and last byte
  const firstMask = 0xFF >> startOffset
  const lastMask = (0xFF >> endOffset) ^ 0xFF

  const isSamByte = firstFullByte - 1 === lastFull + 1
  if (isSamByte) {
    const mask = firstMask & lastMask
    screen[firstFullByte - 1] |= mask
  } else {
    screen[firstFullByte - 1] |= firstMask
    screen[lastFull + 1] |= lastMask
  }
}

var testScreen = [
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
]
drawLine(testScreen, 64, 11, 35, 1);
console.log(testScreen);

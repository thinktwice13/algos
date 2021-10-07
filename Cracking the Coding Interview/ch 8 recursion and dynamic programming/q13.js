// // Stack of Boxes: You have a stack of n boxes, with widths Wi' heights hi' and depths d • The boxes1cannot be rotated and can only be stacked on top of one another if each box in the stack is strictly larger than the box above it in width, height. and depth. Implement a method to compute the height of the tallest possible stack. The height of a stack is the sum of the heights of each box

class Box {
  constructor(height, width, depth) {
    this.h = height
    this.w = width
    this.d = depth
  }
}

// const stackBoxes = (collection) => {
//   // Sort desc by height
//   collection.sort((a,b) => b.h - a.h)
//   return stack(collection)
// }

// const stack = (collection, bottomIdx = 0) => {
//   const bottom = collection[bottomIdx]
//   let maxHeight = 0
//   for (let i = bottomIdx + 1; i < collection.length; i++) {
//     // Check if box can be next
//     if (isValid(collection[i], bottom)) {
//       const height = stack(collection, i);
//       maxHeight = Math.max(maxHeight, height)
//     }
//   }
//   maxHeight += bottom.h
//   return maxHeight
// }

// const isValid = (next,below) => 
//   below.h > next.h
//   && below.w > next.w
//   && below.d > next.d

// // TEST

// const collection = [
//   new Box(5,11,3),
//   new Box(10,9,9),
//   new Box(7,1,2),
// ]

// const c = stackBoxes(collection)

const createStack = (boxes) => {
  // Sort collection of boxes by height
  boxes.sort((a,b) => b.h - a.h)
  const map = {}
  return stack(boxes, null, 0, map)
}

const stack = (boxes, bottom, offset, map) => {
  const isOver = offset >= boxes.length
  if (isOver) return 0;

  // Height with this bottom
  const newBottom = boxes[offset]
  let heightWithBottom = 0
  if (bottom === null || isValid(bottom, newBottom)) {
    const memoValue = map[offset]
    if (!memoValue) {
      const restStack = stack(boxes, newBottom, offset + 1, map);
      const mapValue = restStack + newBottom.h;
      map[offset] = mapValue
    }
    heightWithBottom = map[offset]
  }

  // Without this bottom
  const heihghtWithoutNewBottom = stack(boxes, bottom, offset + 1, map)

  return Math.max(heightWithBottom, heihghtWithoutNewBottom)
}

const isValid = (below, above) => Object.keys(below).every((dimension) => below[dimension] > above[dimension])
// TEST is valid

// TEST
const collection = [
  new Box(5,1,2),
  new Box(10,9,9),
  new Box(7,9,11),
]
const iv = isValid(collection[1],collection[2])

const c = createStack(collection)
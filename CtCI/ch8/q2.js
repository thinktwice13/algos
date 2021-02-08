// Find a path through a maze from top lef to bottom right

// Branch out looking for next available position from m[r][c] to m[r+1][c] and m[r][c+1]

const path = (maze) => {
  if (!maze || !maze.length) return null;
  const r = 0
  const c = 0

  const path = []
  return getNext(maze, r, c, path) ? path : null
}

const getNext = (maze, r, c, path = []) => {
  // If next position out of bounds od unavailable, return null
  if (r > maze.length - 1 || c > maze[0].length - 1 ||!maze[r][c]) return false;

  // if at target, end
  const isAtTarget = r === maze.length - 1 && c === maze[0].length - 1
  
  if (isAtTarget || getNext(maze, r + 1, c, path) || getNext(maze, r, c + 1, path)) {
    const position = [r, c]
    path.unshift(position);
    return true
  }
  return false
}

// TEST
const maze = [
  [1,1,1,0,1],
  [1,1,1,1,0],
  [0,0,1,0,0],
  [1,1,1,1,1],
  [1,1,1,0,1],
]

const res = path(maze);

// Runtime at most O(2^(r+c))
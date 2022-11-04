// Robot in a Grid


function isUnavailable(r, c, matrix) {
	return r < 0 || c < 0 || !matrix[r]?.[c]
}

class Path extends Set {
	/**
	 * 
	 * @param {boolean[][]} matrix 
	 */
	next(row, col, matrix) {
		// Check if position unavailable
		if (isUnavailable(row, col, matrix)) return null

		// This position is valid. Save to path
		this.add([row, col])

		// If robot at 0,0 coords, path found
		const isAtOrigin = row === 0 && col === 0
		if (isAtOrigin) return this

		// If not at origin, try moving from adjacent positions
		return this.next(row - 1, col, matrix) || this.next(row, col - 1, matrix)
	}
}

function fn(matrix) {
	if (!matrix || matrix.length === 0) return null

	const path = new Path()
	return path.next(matrix.length - 1, matrix[0].length - 1, matrix)
}

const m = [
	[true, true, true, true],
	[true, true, true, true],
	[true, true, true, false],
	[true, true, true, true],
]

const p = fn(m)

// Find a path through a maze from top lef to bottom right

// Branch out looking for next available position from m[r][c] to m[r+1][c] and m[r][c+1]
const path = (maze) => {
	if (!maze || !maze.length) return null;
	const r = 0
	const c = 0

	const path = []
	const failedMap = Array.from(maze, r => Array.from(r, () => false))
	return getNext(maze, failedMap, r, c, path) ? path : null
}

const getNext = (maze, failedMap, r, c, path = []) => {
	// If next position out of bounds od unavailable, return null
	if (r > maze.length - 1 || c > maze[0].length - 1 || !maze[r][c]) return false;

	if (failedMap[r][c]) return false;

	// if at target, end
	const isAtTarget = r === maze.length - 1 && c === maze[0].length - 1

	if (isAtTarget
		|| getNext(maze, failedMap, r + 1, c, path)
		|| getNext(maze, failedMap, r, c + 1, path)) {
		const position = [r, c]
		path.unshift(position);
		return true
	}
	failedMap[r][c] = true
	return false
}

// TEST
const maze = [
	[1, 1, 1, 0, 1],
	[1, 1, 1, 1, 0],
	[0, 0, 1, 0, 0],
	[1, 1, 1, 1, 1],
	[1, 1, 1, 0, 1],
]

const res = path(maze);

// Runtime at most O(2^(r+c))


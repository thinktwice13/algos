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
p


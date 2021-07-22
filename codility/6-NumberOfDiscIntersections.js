function solution(A) {
  if (A.length < 2) return 0;

  // Map open and closed discs at each point on the plane
  const plane = A.reduce((acc, radius, center) => {
    const openingPoint = center - radius;
    if (acc[openingPoint]) acc[openingPoint].open++;
    // Update open position
    else acc[openingPoint] = { open: 1, closed: 0 };

    const closingPoint = center + radius;
    if (acc[closingPoint]) acc[closingPoint].closed++;
    else acc[closingPoint] = { open: 0, closed: 1 };

    return acc;
  }, {});

  // Sort plane and check every point: Intersections are created when there are discs open before the previous closes
  const sortedPlane = Object.entries(plane).sort((a, b) => a[0] - b[0]);
  let openCount = 0;
  let totalIntersections = 0;
  for (let point of sortedPlane) {
    // Process new open discs: Intersect each with all currenlty open discs
    let openDiscs = point[1].open;
    while (openDiscs > 0) {
      totalIntersections += openCount;
      if (totalIntersections > 10000000) return -1;
      openCount++;
      openDiscs--;
    }

    // Reduce count of open discs (lower number of future intersections)
    const closedDiscs = point[1].closed;
    openCount -= closedDiscs;
  }

  return totalIntersections;
}

function solutionB(A) {
  if (A.length < 2) return 0;

  // Make an array if [open, open/close as true/undefined] positions for each disc
  // Tn, Sn
  const positions = [];
  for (let pos = 0; pos < A.length; pos++) {
    positions.push([pos - A[pos], true]); // Opening positions
    positions.push([pos + A[pos]]); // Closing positions
  }

  // Sort discs by position > open > close
  // Tn
  positions.sort((a, b) => {
    // By position
    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;
    // By open disc first
    if (a[1] > b[1]) return -1;
    if (a[1] < b[1]) return 1;

    return 0;
  });

  // For each position check open and closed discsc and keep track of total and currently open discs
  let totalIntersections = 0;
  let currentlyOpen = 0;
  // Tn
  for (let i = 0; i < positions.length; i++) {
    // If open here, increase total for current and add1 to current
    if (positions[i][1]) totalIntersections += currentlyOpen++;
    // Else decr currently open discsc
    else currentlyOpen--;
  }

  return totalIntersections;
}

// Total Tn, Sn

// TEST
const arr = [1, 5, 2, 1, 4, 0];
const res = solutionB(arr);

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

// TEST
const arr = [1, 5, 2, 1, 4, 0];
const res = solution(arr);

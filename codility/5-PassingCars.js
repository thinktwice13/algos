function solution(A) {
  const direction = A[0];

  let directionCounter = 1;
  let carPairsCounter = 0;
  for (let car = 1; car < A.length; car++) {
    // if matches direction, increase direction counter
    // For every car in opposite direction, increase carPairsCounter for all directoinA cars found so far
    const matchesDirection = A[car] === direction;
    if (matchesDirection) directionCounter++;
    else carPairsCounter += directionCounter;

    if (carPairsCounter > 1000000000) return -1;
  }

  return carPairsCounter;
}

function solutionB(A) {
  let carsTravellingEast = 0;
  let passes = 0;

  for (let direction of A) {
    const isEast = direction === 0;

    if (isEast) carsTravellingEast++;
    else passes += carsTravellingEast;
  }

  return passes;
}

// TEST
const a = [0, 1, 0, 1, 1];
const res = solutionB(a);

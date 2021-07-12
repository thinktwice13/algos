/**
 * @param {number} X starting posiiton
 * @param {number} X end position
 * @param {number} X jump size
 * @returns number of jumps needed
 */
const fn = (X, Y, D) => {
  const distance = Y - X;
  if (distance < D) return 1;
  let jumps = Math.floor(distance / D);
  if (jumps * D < distance) jumps++;

  return jumps;
};

fn(10, 85, 30);

/**
 * Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0).
 * Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.
 */
/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
  const getArea = (from, to) =>
    Math.min(height[from], height[to]) * (to - from);
  let from = 0;
  let to = height.length - 1;
  let maxArea = getArea(from, to);

  while (from < to) {
    maxArea = Math.max(maxArea, getArea(from, to));
    if (from < to) from++;
    else to--;
  }

  return maxArea;
};

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const s = maxArea(height);

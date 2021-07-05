// https://leetcode.com/problems/minimum-index-sum-of-two-lists/

/**
 * Hash list 1 restaurant indices
 * Match list2 restaurants against list 1 hash and collect matched restaurants
 * If new min idx sum found, reset results. If equal idx sum found, push to results
 */
var findRestaurant = function (list1, list2) {
  const hash = new Map();
  for (let i = 0; i < list1.length; i++) hash.set(list1[i], i);

  let idxSum = Infinity;
  let results = [];

  for (let i = 0; i < list2.length; i++) {
    const hashIdx = hash.get(list2[i]);

    if (hashIdx + i === idxSum) results.push(list2[i]);
    else if (hashIdx + i < idxSum) {
      results = [list2[i]];
      idxSum = hashIdx + i;
    }
  }

  return results;
};

const a = ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'];
const b = ['KFC', 'Burger King', 'Tapioca Express', 'Shogun'];

findRestaurant(a, b);

// Find magic index in an array of sorted distinct integers (array[n] === n)

// Use binary search
const magicIdx = (arr, start, end) => {
  if (!arr || !arr.length) return -1;
  const from = start || 0 
  const to = end || arr.length
  
  const mid = Math.floor((from + to) / 2);
  if (arr[mid] === mid) return mid;
  if (arr[mid] < mid) return magicIdx(arr, mid + 1, to);
  else return magicIdx(arr, from, to - 1)
}

// TEST
const arr = [-30, -20, 0, 1, 3, 5, 7, 9, 12];
const res = magicIdx(arr);

// IF not distinct: Find mid and max/min index that coudl me the one and then iterate
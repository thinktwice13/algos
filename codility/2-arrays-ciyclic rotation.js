const fn = (A, K) => {
  const offset = A.length - (K > A.length ? A.length & K : K);
  // const offset = A.length - K % A.length
  return [...A.slice(offset), ...A.slice(0, offset)];
};

const arr = [1, 2, 3];
const k = 2;
fn(arr, k);

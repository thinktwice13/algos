const fn = (A,K) => {
  const offset = A.length - (K > A.length ? A.length & K : K)
  return [...A.slice(offset), ...A.slice(0, offset)]
}
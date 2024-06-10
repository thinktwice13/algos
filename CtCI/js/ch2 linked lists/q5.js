

const numToLL = (i, f = 1, ll = []) => {
  if (i <= 0) return ll;

  const val = (i % (f * 10))
  ll.push(val / f)
  return numToLL(i - val, f * 10, ll)
}
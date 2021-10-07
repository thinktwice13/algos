

const numToLL = (i, f = 1, ll = []) => {
  if (i <= 0) return ll;

  const val = (i % (f * 10))
  ll.push(val / f)
  console.log(i, f, ll)
  return numToLL(i - val, f * 10, ll)
}

// Turn returned array into a LinkedList
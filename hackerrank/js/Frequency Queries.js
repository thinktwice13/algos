// https://www.hackerrank.com/challenges/frequency-queries/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

function freqQuery(queries) {
  const map = {}

  for (let i = 0 ; i < queries.length;i++) {
    const [type,data] = queries[i]

    if (type === 3) console.log(data)
    else if (type === 1) map[data] = (map[data] || 0) + 1
    else if (map[data]) map[data]--
  }
}

const q = [[1,5],[1,5],[3,2],[1,10],[1,10],[1,6],[2,5],[3,2]]
freqQuery(q)
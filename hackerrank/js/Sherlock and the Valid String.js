// https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings


// On time, On space
function isValidA(s) {
  if (s.length < 3) return 'YES'

  // Make char count map
  const charCountMap = {}
  for (const char of s) {
    charCountMap[char] = (charCountMap[char] || 0) + 1
  }

  charCountMap

  
  /**
   * We have one move available to make keep the string valid: 
   * Remove any encountered char that has a count of 1 or ay char that has a count of +1 compared to previously recorded count
   */

  // They will both be numbers!
  let leader;
  let leaderCount = 0
  // Flag when there is one count that applied to more than one char. In that case, this can be the oly one
  let hasRemoved = false // Flag when we remove 1 from any of the counts. We can only do it once
  
  for (const char in charCountMap) {
    const count = Number(charCountMap[char])

    if (count === 1) {
      if (hasRemoved) return 'NO'
      hasRemoved = true
    }

    else if (!leader) {
      leader = count
      leaderCount++
    }

    else if (count !== leader) {
      // If not leader
      if (hasRemoved) return 'NO' // We cannot remove any more chars
      else {
        hasRemoved = true // In any case, will will have to remove a char

        if (count > leader + 1) return 'NO'  // Too many to remove
        // Replace leader only in case we only had one occurence
        else if (count === leader - 1 && leaderCount === 1) leader = count
      }
    }
  }

  return 'YES'
} 

const s = 'aaaabbcc'
isValidA(s)
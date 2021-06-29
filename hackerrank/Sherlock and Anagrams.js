// https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

/**
 * Complete the 'sherlockAndAnagrams' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

/**
 * Get all possible substrings
 * Sort them and store for matching a pair
 * O2^n time, O n^2+n space
 */
function sherlockAndAnagrams(s) {
    if (s.length < 2) return 0
    
    // Count occurrences of unique substrings. Used to count number of matches for each repeated
    const substrMap = {}
    let pairCount = 0

    for (let i = 0; i < s.length; i++) {
        let currSubstring = '' // Init current substring
        
        for (let ii = i; ii < s.length;ii++) {
            // No need to check entire string for anagrams
            if (ii - i === s.length - 1) continue

            // Add to current substring and sort
            // TODO Insert next char instead of sorting
            currSubstring += s[ii]
            const substring = currSubstring.split('').sort().join('')

            // Add surrent substring to map and count every count every previous equal found
            substrMap[substring] = (substrMap[substring] || 0) + 1
            pairCount += (substrMap[substring] - 1)
        }
    }

    return pairCount
}

sherlockAndAnagrams('abba')
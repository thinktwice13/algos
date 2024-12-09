// https://leetcode.com/problems/roman-to-integer/

const romanToInt = function (s) {
  const vals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  // Init results with the first numeral and start checking form the second one
  let result = vals[s[0]];
  for (let i = 1; i < s.length; i++) {
    const [num, prevNum] = [s[i], s[i - 1]];
    result += vals[num];

    // If current value is bigger than last one remove previous * 2, becuase we have already added the value of the previous
    if (vals[num] > vals[prevNum]) {
      result -= vals[prevNum] * 2;
    }
  }

  return result;
};

const s = 'MCMXCIV';
romanToInt(s);

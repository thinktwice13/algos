// https://leetcode.com/problems/unique-morse-code-words/

const alphabet = {
  a: '.-',
  b: '-...',
  c: '-.-.',
  d: '-..',
  e: '.',
  f: '..-.',
  g: '--.',
  h: '....',
  i: '..',
  j: '.---',
  k: '-.-',
  l: '.-..',
  m: '--',
  n: '-.',
  o: '---',
  p: '.--.',
  q: '--.-',
  r: '.-.',
  s: '...',
  t: '-',
  u: '..-',
  v: '...-',
  w: '.--',
  x: '-..-',
  y: '-.--',
  z: '--..',
};

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  const set = new Set();
  words.forEach((word) => {
    // Transform
    let transformed = '';
    let charIdx = 0;
    while (charIdx < word.length) {
      transformed += alphabet[word[charIdx]];
      ++charIdx;
    }

    set.add(transformed);
  });

  return set.size;
};

var uniqueMorseRepresentationsB = function (words) {
  return new Set(
    words.map((word) =>
      word
        .split('')
        .map((char) => alphabet[char])
        .join('')
    )
  ).size;
};

uniqueMorseRepresentations(['kjbhjk']);

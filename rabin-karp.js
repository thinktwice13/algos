const hash = (s) =>
  s.split('').reduce((h, b) => {
    h = (h << 5) - h + b.charCodeAt(0);
    return h & h;
  }, 0);

const areEqual = (s1, s2) => {
  if (s1 !== s2) {
    return false;
  }
  for (i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      return false;
    }
  }
  return true;
};

/**
 * find all occurrences of a substring in a given text based on hash values
 */
const rk = (text, substr) => {
  // Get hash of the entire text
  const ssHash = hash(substr);
  let matches = 0;

  // Iterate text in search for substring  and compare hashes. If hashes match, compare actual substring
  for (let i = 0; i <= text.length - substr.length; i++) {
    const currentSubstring = text.slice(i, i + substr.length);
    const currHash = hash(currentSubstring);

    currHash === ssHash && areEqual(substr, currentSubstring) && ++matches;
  }

  return matches;
};

const str = 'aaaaaabbaaaaaabbaaaabb';
const m = rk(str, 'bba');

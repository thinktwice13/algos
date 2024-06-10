// Calc all permutations of a string

let calls = -1;

const perm = (s, prefix = '') => {
  console.log(prefix);
  calls++;

  if (s.length === 0 || prefix.length > 4) return s;
  else {
    for (let pos in s) {
      const remaining = s.slice(0, +pos) + s.slice(+pos + 1);
      perm(remaining, prefix + s[+pos]);
    }
  }
};

const str = 'abcd';
perm(str);
calls;

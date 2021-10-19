// Basic string compression, eg abccccdeeef -> abc4de3f. All chars lowercase or uppercase [a-z]

const fn = (str) => {
  // Iterate characters. When char equal to previous, increase count
  // When not equal to previus, concateate count to new string and reset count

  if (str.length < 2) return str;

  let count = 1;
  let compressed = str[0];

  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      if (count > 1) {
        compressed += count; // NOTE Depending on implementation and language, string concatenation could be On2!

        count = 1;
      }
      compressed += str[i];
    }
  }

  if (count > 1) compressed += count;

  return compressed.length === str.legth ? str : compressed;
};

const fn2 = (str) => {
  // Check for length of compressed string immmediately. Initiate empty array (O1 operations) for use with next loop
  // Iterate chars again and populate array
  // Join and return

  if (str.length < 2) return str;

  // Check for compressed string length on start
  let compressedLength = str.length;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i - 1]) compressedLength--;
  }

  // Return original string if lengths equal
  if (compressedLength === str.length) return str;

  // Lengths not equal. Initiate array
  const compressedArray = new Array(compressedLength);
  compressedArray[0] = str[0];
  let compressedArrayPos = 1;

  let p1 = 1;
  while (p1 < str.length) {
    if (str[p1] === str[p1 - 1]) {
      // If equal to previous char, count consecutive and record in compressedArray
      let p2 = p1 + 1;
      let count = 2;
      while (str[p2] === str[p1]) {
        count++;
        p2++;
      }
      compressedArray[compressedArrayPos++] = count;
      p1 = p2;
    } else {
      // Otherwise, record to next compressedArray position
      compressedArray[compressedArrayPos++] = str[p1];
      p1++;
    }
  }

  return compressedArray.join('');
};

const str = 'aa';
const compressed = fn2(str);
compressed;

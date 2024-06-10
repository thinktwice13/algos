// URLify: Replace spaces in a string with %20

// Use queue to remember overwritten characters
// On + On
const URLify = (str) => {
  if (str.length < 1) return '';

  let urlified = '';

  const queue = [];

  let idx = 0; // Starting index

  // Go through the original string first
  // On
  while (str[idx] !== undefined) {
    const char = str[idx];
    // If there is anything in the queue, use that first and queue up overwritten characters
    if (queue[0] !== undefined) {
      urlified += queue.shift();
    }

    // If char is a space queue %20 instead of the original characted
    if (char === ' ') queue.push('%', '2', '0');
    else queue.push(char);
    idx++;
  }

  urlified;

  // When finished with the original string, add remaining queued chars
  // O3n: At most, all of the chars will be spaces, whilch will make queue 3x the length
  while (queue.length > 0) urlified += queue.shift();

  return urlified;
};

const str = ' a ';
URLify(str);

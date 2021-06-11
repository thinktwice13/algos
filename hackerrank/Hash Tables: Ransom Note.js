// https://www.hackerrank.com/challenges/ctci-ransom-note/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

function checkMagazine(magazine, note) {
  // If there are fewer words in the magazine, answer is No
  if (magazine.length < note.length) return console.log('No');

  // Map words in the note
  const noteMap = new Map();
  for (const word of note) noteMap.set(word, (noteMap.get(word) || 0) + 1);

  /**
   * For each word in the magazine:
   * Check and lower the count in the noteMap if matched.
   * If this was the last instance, delete key
   * If this was the last needed word, print Yes
   *
   * If the entire magazine is checked, and noteMap still has needded words, print No
   */
  for (const word of magazine) {
    // Remove one instance from noteMap
    const noteWordCount = noteMap.get(word);

    if (noteWordCount > 1) noteMap.set(word, noteWord - 1);
    // If this is the last needed instance of this word
    else if (noteWordCount === 1) {
      noteMap.delete(word);

      // If map is empty, we found all the words
      if (noteMap.size === 0) return console.log('Yes');
    }
  }

  // If we reach here, it means we have not found all the note workd in the magasine
  console.log('No');
}

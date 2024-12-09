// https://leetcode.com/problems/verifying-an-alien-dictionary/

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
const isAlienSorted = function (words, order) {
  /**
   * Ugly one-liner
   * Work is in correct position if
   * Is last workd in the list
   * First character in correct order compared to the first character of the next word
   * Next character is undefined (In that case all prev will have been validated)
   * Next character is in the correct order compared ot the character at the same position of the next word
   * Character is the same position of the next word is undefined, but tha last checked was in correct order
   */
  return (
    words.length < 2 ||
    words.every(
      (word, wordIdx) =>
        // Is last word
        wordIdx + 1 >= words.length ||
        // First chars in correct order
        order.indexOf(words[wordIdx + 1][0]) > order.indexOf(word[0]) ||
        word.split('').every((char, charIdx) =>
          // Current word finished
          charIdx > word.length - 1 ||
          // Is next word finished?
          words[wordIdx + 1][charIdx] === undefined
            ? // Then last compared char must bigger in the ext word
              order.indexOf(words[wordIdx + 1][charIdx - 1]) >
              order.indexOf(word[charIdx - 1])
            : // Otherwise they can be equal or in correct order
              order.indexOf(words[wordIdx + 1][charIdx]) >=
              order.indexOf(word[charIdx])
        )
    )
  );
};

const words = ['apple', 'app'];
const order = 'abcdefghijklmnopqrstuvwxyz';
isAlienSorted(words, order);

const { NotImplementedError } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  const countChars = (str) => {
    const map = {};
    for (let ch of str) {
      map[ch] = (map[ch] || 0) + 1;
    }
    return map;
  };

  const map1 = countChars(s1);
  const map2 = countChars(s2);

  let commonCount = 0;

  for (let ch in map1) {
    if (map2[ch]) {
      commonCount += Math.min(map1[ch], map2[ch]);
    }
  }

  return commonCount;
}

module.exports = {
  getCommonCharacterCount
};

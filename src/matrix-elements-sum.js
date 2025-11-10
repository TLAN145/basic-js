const { NotImplementedError } = require('../lib');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  if (!Array.isArray(matrix)) return 0;

  const cols = matrix[0].length;
  const zeroCols = Array(cols).fill(false);
  let sum = 0;

  for (const row of matrix) {
    for (let i = 0; i < cols; i++) {
      if (!zeroCols[i]) {
        sum += row[i];
        if (row[i] === 0) zeroCols[i] = true;
      }
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};

/**
 * Counts the occurrences of each element in an array.
 * @param {Array} arr - The array to process.
 * @returns {Object} - An object with element counts.
 */
function countOccurrences(arr) {
  return arr.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
}

module.exports = { countOccurrences };

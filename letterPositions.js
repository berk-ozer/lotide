const letterPositions = function(string) {
  const results = {};

  for (const [index, letter] of string.split('').entries()) {
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter].push(index);
      } else {
        results[letter] = [index];
      }
    }
  }

  return results;
};

module.exports = letterPositions;
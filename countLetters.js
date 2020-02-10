// ASSERT FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);

  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// ACTUAL FUNCTION
const countLetters = function(string) {
  let letterCount = {};

  for (const letter of string) {
    if (letter !== ' ') {
      letterCount[letter] = letterCount[letter] + 1 || 1;
    }
  }
  
  return letterCount;
};

// TEST CASES
const result1 = countLetters('hello');

assertEqual(result1['h'], 1);
assertEqual(result1['l'], 2);
assertEqual(result1['z'], undefined);

const result2 = countLetters('my name is berk');

assertEqual(result2['m'], 2);
assertEqual(result2['y'], 1);
assertEqual(result2['j'], undefined);

module.exports = countLetters;
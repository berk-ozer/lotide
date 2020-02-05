// ASSERT FUNCTIONS
const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  } else {
    return false;
  }

  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅✅✅ Assertion Passed: Arrays are equal.`);

  } else {
    console.log(`❌❌❌ Assertion Failed: Arrays are NOT equal.`);
  }
};

// ACTUAL FUNCTION
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

// TEST CASES
const result1 = letterPositions('hello');

assertArraysEqual(result1['h'], [0]);
assertArraysEqual(result1['e'], [1]);
assertArraysEqual(result1['l'], [2, 3]);
assertArraysEqual(result1['o'], [4]);

const result2 = letterPositions('lighthouse in the house');

assertArraysEqual(result2['i'], [1, 11]);
assertArraysEqual(result2['t'], [4, 14]);
assertArraysEqual(result2['o'], [6, 19]);
assertArraysEqual(result2['e'], [9, 16, 22]);

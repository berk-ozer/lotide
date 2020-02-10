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
const map = (array, callback) => {
  let output = [];

  for (const element of array) {
    output.push(callback(element));
  }

  return output;
};

// TEST CODE
const words = ['astronaut', 'space', 'sleep'];
const results1 = map(words, (word) => 'I am a ' + word);

assertArraysEqual(results1, ['I am a astronaut', 'I am a space', 'I am a sleep']);

const numbers = [11, 22, 33];
const results2 = map(numbers, (num) => num * 2);

assertArraysEqual(results2, [22, 44, 66]);

const confused = [true, false, true];
const results3 = map(confused, (confusion) => !confusion);

assertArraysEqual(results3, [false, true, false]);

module.exports = map;
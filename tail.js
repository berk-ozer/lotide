const assertEqual = require('./assertEqual');

const tail = function(array) {
  return array.slice(1);
};

//TEST CASES
const result = tail([1, 2, 3, 4]);
assertEqual(result.length, 3);
assertEqual(result[0], 2);

console.log(tail(['hi']));
console.log(tail([]));
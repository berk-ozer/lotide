const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

console.log('NON NESTED ARRAY TEST');
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true);
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), false);
assertEqual(eqArrays(['hello', false, 42], ['hello', false, 42]), true);
assertEqual(eqArrays([false, true], ['', 1]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);

console.log('\nNESTED ARRAY TEST');
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
assertEqual(eqArrays([[[[[5]]]]], [[[[[5]]]]]), true);
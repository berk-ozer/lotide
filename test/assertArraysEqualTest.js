const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, '3']);
assertArraysEqual([true, false, true], [true, false, true]);
assertArraysEqual(['45', 6, undefined], ['45', 6, undefined]);
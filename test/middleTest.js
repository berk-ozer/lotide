const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle(['hi', 'hello', 'what']), ['hello']);
assertArraysEqual(middle([true, false]), []);
assertArraysEqual(middle(['what', 45, false, 'yes', 22, 3]), [false, 'yes']);
assertArraysEqual(middle(['one thing']), []);
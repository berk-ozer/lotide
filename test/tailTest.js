const assertEqual = require('../assertEqual');
const tail = require('../tail');

const result = tail([1, 2, 3, 4]);
assertEqual(result.length, 3);
assertEqual(result[0], 2);

console.log(tail(['hi']));
console.log(tail([]));
const assert = require('assert');

const myList = [1, 2, 3];

const swap = (number => ([number[2], number[1], number[0]]))

const swappedList = swap(myList);

console.log(swappedList[0], 3)
assert.strictEqual(swappedList[0], 3);
assert.strictEqual(swappedList[1], 2);
assert.strictEqual(swappedList[2], 1);
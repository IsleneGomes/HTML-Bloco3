const assert = require('assert');

const greet = ((name, name2 = 'Hi') => `${name2} ${name}`)

assert.strictEqual(greet('John'), 'Hi John');
assert.strictEqual(greet('John', 'Good morning'), 'Good morning John');
assert.strictEqual(greet('Isabela', 'Oi'), 'Oi Isabela');
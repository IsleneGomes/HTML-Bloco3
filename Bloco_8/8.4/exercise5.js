
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, nome) => acc + nome.split('').reduce((cont, letras) => {
      if (nome.split('').includes('a') || nome.split('').includes('A')){
      return (acc = acc + 1);
      }
    },
    0),0);
}

assert.deepStrictEqual(containsA(), 20);
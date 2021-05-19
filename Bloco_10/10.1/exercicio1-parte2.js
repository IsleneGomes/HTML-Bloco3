const encode = (frase) => {
  for (let index = 0; index < frase.length; index += 1) {
    frase = frase.replace('a', '1');
    frase = frase.replace('e', '2');
    frase = frase.replace('i', '3');
    frase = frase.replace('o', '4');
    frase = frase.replace('u', '5');
  }
  return frase;
}

const decode = (frase) => {
  for (let index = 0; index < frase.length; index += 1) {
    frase = frase.replace('1', 'a');
    frase = frase.replace('2', 'e');
    frase = frase.replace('3', 'i');
    frase = frase.replace('4', 'o');
    frase = frase.replace('5', 'u');
  }
  return frase;
}

const techList = (array, name) => {
  let test = [];
  array.sort();
  for (let index = 0; index < array.length; index += 1) {
    test.push({
      tech: array[index],
      name,
    });
  }
  if (array.length === 0) {
    return 'Vazio!';
  }
  return test;
}

const hydrate = (string) => {
  let numeroCopos = string.match(/\d+/g).map(Number);
  let somaCopos = 0;
  for (let index = 0; index < numeroCopos.length; index += 1) {
    somaCopos += numeroCopos[index];
  }
  if (somaCopos > 1) {
    return (`${somaCopos} copos de água`);
  } if (somaCopos >= 0 || somaCopos < 1) {
    return (`${somaCopos} copo de água`);
  }
  return hydrate;
}
module.exports = { encode, decode, techList, hydrate };
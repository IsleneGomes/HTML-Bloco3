const myRemove = require('./exercicio2');

describe('Exercicio 2 - Testes Unitários', () => {
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    const arr = [1, 2, 3, 4];
    expect(myRemove(arr, 3)).toEqual([1, 2, 4]);
  });
});

describe('Exercicio 2 - Testes Unitários', () => {
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    const arr = [1, 2, 3, 4];
    expect(myRemove(arr, 3)).not.toEqual([1, 2, 3, 4]);
  });
});

describe('Exercicio 2 - Testes Unitários', () => {
  it('Verifique se o array passado por parâmetro não sofreu alterações', () => {
    const arr = [1, 2, 3, 4];
    expect(myRemove([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });
});

describe('Exercicio 2 - Testes Unitários', () => {
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    const arr = [1, 2, 3, 4];
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
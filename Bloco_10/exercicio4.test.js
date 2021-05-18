const myFizzBuzz = require('./exercicio4.js');

describe('Exercicio 4 - Testes Unitários', () => {
  it('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
  })
});

describe('Exercicio 4 - Testes Unitários', () => {
  it('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(3)).toEqual('fizz');
  })
});

describe('Exercicio 4 - Testes Unitários', () => {
  it('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(5)).toEqual('buzz');
  })
});

describe('Exercicio 4 - Testes Unitários', () => {
  it('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(7)).toEqual(7);
  })
});

describe('Exercicio 4 - Testes Unitários', () => {
  it('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz('Boa')).toEqual(false);
  })
});
const { uppercase } = require('./exercicio1');

describe('Testa a função uppercase', () => {
  it('Testa se a função retorna letras maiúsculas', () => {
  expect.assertions(1);
    uppercase('frase', func => {
      expect((func)).toBe('FRASE');
    }
  )})

   it('Testa se a função não retorna letras miiúsculas', () => {
  expect.assertions(1);
    uppercase('frase', func => {
      expect((func)).not.toBe('FRASe');
    }
  )})
})
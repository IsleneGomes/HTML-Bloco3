const { obj1, obj2, obj3 } = require('./exercicio5');

// Compare dois objetos (JSON) para verificar se são idênticos ou não

describe('Exercicio 5 - Testes Unitários', () => {
  it('Compara se Obj1 e Obj2 são iguais', () => {
    expect({ obj1 }).not.toStrictEqual({ obj2 });
  })

   it('Compara se Obj1 e Obj3 são iguais', () => {
    expect({ obj1 }).not.toStrictEqual({ obj3 });
  })

   it('Compara se Obj3 e Obj2 são iguais', () => {
    expect({ obj3 }).not.toStrictEqual(({ obj2 }));
  })
})
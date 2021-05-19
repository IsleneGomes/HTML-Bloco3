const { findUserById, getUserName } = require('./exercicio2');

// Utilizando a sintaxe de Promise , faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.
// Dica : Veja os dados falsos utilizados no banco de dados, disponíveis na variável users , para saber quais IDs existem.
describe('Testa a função getUserName', () => {
  it('verifique o resultado da função getUserName para o caso em que o usuário é encontrado', () => {
    expect.assertions(1);
    return getUserName(5).then((data) => expect(data).toEqual('Paul'));
  });

  it('verifique o resultado da função getUserName para o caso em que o usuário não é encontrado', () => {
    expect.assertions(1);
      return getUserName(1).catch(error =>
        expect(error).toEqual({ error: 'User with 1 not found.' }));
  });
});
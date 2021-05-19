const { getUserName } = require('./exercicio3');

// Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await .
// Dica: Utilize o try/catch para o caso de erro.

describe('Testa a função getUserName com async', () => {
  it('verifique o resultado da função getUserName para o caso em que o usuário é encontrado', async () => {
     expect.assertions(1);
     try {
      await getUserName(6)
     } catch (error) {
     expect(error).toEqual({
      error: 'User with 6 not found.',
     });
    }
  });
});
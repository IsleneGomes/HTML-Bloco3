const { getRepos } = require('./exercicio4');

describe('Testa a função getRepos', () => {
  it('verifique que os repositórios sd-01-week4-5-project-todo-list se encontra na lista', () => {
    expect.assertions(1);
      const url = 'https://api.github.com/orgs/tryber/repos';
      return getRepos(url).then((busca) => {
      expect(busca).toContain('sd-01-week4-5-project-todo-list');
    });
  })

  it('verifique que os repositórios sd-01-week4-5-project-meme-generator se encontra na lista', () => {
  expect.assertions(1);
      const url = 'https://api.github.com/orgs/tryber/repos';
      return getRepos(url).then((busca) => {
      expect(busca).toContain('sd-01-week4-5-project-todo-list');
    });
  })
});
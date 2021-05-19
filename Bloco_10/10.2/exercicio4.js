const url = require('http');

const getRepos = (url) => {
  http.get({path: url}
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    }));
};

module.exports = { getRepos }
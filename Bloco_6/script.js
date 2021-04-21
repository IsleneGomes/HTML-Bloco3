const bootstrap = require(bootstrap.js);
const estadosUF = document.getElementsByTagName('.combobox');
const uf = [" ", "AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];

function estadosBras() {
  for (let index = 0; index < uf.length; index += 1) {
    const option = document.createElement('option');
    estadosUF.appendChild(option);
    option.innerText = uf[index];
  }
}
estadosBras();

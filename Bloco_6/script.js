const estadosUF = document.getElementById('estado');
const uf = ["", "AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];

function estadosBras() {
  for (let index = 0; index < uf.length; index += 1) {
    const option = document.createElement('option');
    estadosUF.appendChild(option);
    option.innerText = uf[index];
  }
}
estadosBras();

function cpf() {
const cpf = document.getElementById('cpf');
let valor = cpf.value;
  if (valor !== 'text') {
    return cpf.value;
  } else {
    alert ('Insira apenas números.');
  }
}
cpf();

function preventDefault(element) {
  element.preventDefault();
}

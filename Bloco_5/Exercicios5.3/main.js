const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
divDois.className = 'divDois';
const divTres = document.getElementById('divTres');
divTres.className = 'divTres';
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');
const bloco = document.getElementsByClassName('container');


/*2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?*/
function adicionaClasse(event) {
document.getElementsByClassName('tech')[0].innerText = event.target.value;
}
input.addEventListener('keyup', adicionaClasse);
/*3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento com a classe 'tech';*/
function caixaTexto(valor) {
document.getElementsByClassName('tech')[0].classList.remove('tech');
valor.target.classList.add('tech');
}


/*4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele redirecione para alguma página;
4.1. Que tal redirecionar para seu portifólio?*/
function duploClique() {
window.location.replace('https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList');
}
mySpotrybefy.addEventListener('dblclick', duploClique)

/*5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere a cor do mesmo;*/
function alteraCor(event) {
  event.target.style.color = 'yellow';
}

function voltaCor(event){
  event.target.style.color = '';
}
mySpotrybefy.addEventListener('mouseover', alteraCor);
mySpotrybefy.addEventListener('mouseleave', voltaCor);

//preciso criar uma classe par div 2 e 3

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
    event.target.innerText = 'Opção reiniciada';
    
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}
divUm.addEventListener('dblclick', resetText);
divDois.addEventListener('dblclick', resetText);
divTres.addEventListener('dblclick', resetText);

function TextoDiv2(valor) {
document.getElementsByClassName('divDois')[0].classList.remove('divDois');
valor.target.classList.add('divDois');
}

function TextoDiv3(valor) {
document.getElementsByClassName('divTres')[0].classList.remove('divTres');
valor.target.classList.add('divTres');
}

// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.
  
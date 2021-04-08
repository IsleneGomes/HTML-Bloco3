//1. Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
let pai = document.querySelector('body');
let tag1 = 'Exercício 5.2 - JavaScript DOM';
let criafilho = pai.appendChild(document.createElement('h1'));
criafilho.innerText = tag1;


//2. Adicione a tag div com a classe main-content como filho da tag body ;
let criaDiv = pai.appendChild(document.createElement('div'));
criaDiv.className = 'main-content';

//3. Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
let criaDiv2 = criaDiv.appendChild(document.createElement('div'));
criaDiv2.className = 'center-content';


//4. Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
let criaTagP = criaDiv2.appendChild(document.createElement('p'));
criaTagP.innerText = 'Filho da div class center-content';


//5. Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
let criaDiv3 = criaDiv.appendChild(document.createElement('div'));
criaDiv3.className = 'left-content';


//6. Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
let criaDiv4 = criaDiv.appendChild(document.createElement('div'));
criaDiv4.className = 'right-content';


//7. Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5;
let criaImg = criaDiv3.appendChild(document.createElement('img'));
criaImg.className = 'small-image';
criaImg.src = 'https://picsum.photos/200';


//8. Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;
let criaList = criaDiv4.appendChild(document.createElement('ul'));
let itensList = criaList.appendChild(document.createElement('li'));
itensList.innerHTML = 'item1';
let itensList2 = criaList.appendChild(document.createElement('li'));
itensList2.innerHTML = 'item2';
let itensList3 = criaList.appendChild(document.createElement('li'));
itensList3.innerHTML = 'item3';
let itensList4 = criaList.appendChild(document.createElement('li'));
itensList4.innerHTML = 'item4';
let itensList5 = criaList.appendChild(document.createElement('li'));
itensList5.innerHTML = 'item5';
let itensList6 = criaList.appendChild(document.createElement('li'));
itensList6.innerHTML = 'item6';
let itensList7 = criaList.appendChild(document.createElement('li'));
itensList7.innerHTML = 'item7';
let itensList8 = criaList.appendChild(document.createElement('li'));
itensList8.innerHTML = 'item8';
let itensList9 = criaList.appendChild(document.createElement('li'));
itensList9.innerHTML = 'item9';
let itensList10 = criaList.appendChild(document.createElement('li'));
itensList10.innerHTML = 'item10';

//9. Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.
let criah31 = criaDiv.appendChild(document.createElement('h3'));
let criah32 = criaDiv.appendChild(document.createElement('h3'));
let criah33 = criaDiv.appendChild(document.createElement('h3'));





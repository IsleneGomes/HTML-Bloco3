//1. Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
let tag1 = 'Exercício 5.2 - JavaScript DOM';
  let criafilho = document.createElement('h1');
  criafilho.innerText = tag1;
  criafilho.id = 'filho';
  let recupera = document.querySelector('body');
        recupera.criafilho = tag1;
  recupera.appendChild(criafilho);
  console.log(document.querySelector('body'));

//2. Adicione a tag div com a classe main-content como filho da tag body ;
let criaDiv = document.createElement('div');
criaDiv.className = 'main-content';
recupera.appendChild(criaDiv);

//3. Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
let criaDiv2 = document.createElement('div');
criaDiv2.className = 'center-content';
criaDiv.appendChild(criaDiv2);

//4. Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
let criaTagP = document.createElement('p');
criaTagP.innerText = 'Filho da div class center-content';
criaDiv2.appendChild(criaTagP);

//5. Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
let criaDiv3 = document.createElement('div');
criaDiv3.className = 'left-content';
criaDiv.appendChild(criaDiv3);

//6. Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
let criaDiv4 = document.createElement('div');
criaDiv4.className = 'right-content';
criaDiv.appendChild(criaDiv4);

//7. Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5;
let criaImg = document.createElement('img');
criaImg.src = 'https://picsum.photos/200';
criaImg.className = 'small-image';
criaDiv3.appendChild(criaImg);

//8. Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;
let criaList = document.createElement('li');
criaList.innerText = ['item1','item2']//não consigo criar a lista

criaDiv4.appendChild(criaList);

//9. Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.
let criah31 = document.createElement('h3');
let criah32 = document.createElement('h3');
let criah33 = document.createElement('h3');
criaDiv.appendChild(criah31);
criaDiv.appendChild(criah32);
criaDiv.appendChild(criah33);


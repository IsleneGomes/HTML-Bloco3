function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};
createDaysOfTheWeek();


function dayofMonth() {
let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let idDays = document.getElementById('days');
  for (let index = 0; index < dezDaysList.length; index += 1) {
    let dia = dezDaysList[index];
    let criaLi = document.createElement('li');
    if (dia === 24 || dia === 31) {
      criaLi.className = 'day holiday';
      criaLi.innerHTML = dia;
      idDays.appendChild(criaLi);
    } 
    else if (dia === 4 || dia === 11|| dia === 18) {
      criaLi.className = 'day friday';
      criaLi.innerHTML = dia;
      idDays.appendChild(criaLi);
    } 
    else if (dia === 25) {
      criaLi.className = 'day holiday friday';
      criaLi.innerHTML = dia;
      idDays.appendChild(criaLi);
    } 
    else {
      criaLi.className = 'day';
      criaLi.innerHTML = dia;
      idDays.appendChild(criaLi);
    }
  }
}
  
dayofMonth();

/*Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
Adicione a este botão a ID "btn-holiday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container"*/

function criaBotao(nomeBotao) {
let buttonsContainer = document.querySelector('.buttons-container');
let botao = document.createElement('button');
  let botaoId = 'btn-holiday';
  botao.innerHTML = nomeBotao;
  botao.id = botaoId;
  buttonsContainer.appendChild(botao);
}
criaBotao('Feriados');

/*Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)"*/

function colorButton(event) {
  let botao = document.querySelector('#btn-holiday');
  let hollidays = document.querySelectorAll('.holiday')
  let backgroundColor = 'rgb(218, 38, 138)';
  let setNewColor = 'yellowgreen';

  botao.addEventListener('click', function() {
    for (let index = 0; index < hollidays.length; index += 1) {
      if (hollidays[index].style.backgroundColor === setNewColor) {
        hollidays[index].style.backgroundColor = backgroundColor;
      } else {
        hollidays[index].style.backgroundColor = setNewColor;
      }
    }
  });
}
colorButton();
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
    else if (dia === 4 || dia === 11|| dia === 18 || dia === 25) {
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

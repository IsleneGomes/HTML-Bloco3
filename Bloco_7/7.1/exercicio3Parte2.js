const botao = document.getElementById('botao');
const evento = document.getElementById('eventobotao');

let clickCount = 0;
botao.addEventListener('click', ()=> {
    clickCount += 1;
    evento.innerHTML = clickCount;
})
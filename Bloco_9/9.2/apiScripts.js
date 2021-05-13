//Agora vamos tentar fazer as requisições a API usando fetch . Essa função recebe dois parâmetros:
// O endereço para o qual a requisição será feita, ou seja, a url do serviço.
// Um objeto contendo as especificações da requisição. Para essa API , atribuiremos a esse objeto as chaves method e headers

// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';


const fetchJoke = () => {

const piada = document.getElementById('jokeContainer');//invoca o h2 do html

  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())//json trata os dados capturados e gera outra promise, 
    .then(data => piada.innerHTML = data.joke);//o segundo then executa a promise atribuindo ao elemento invocado o data.joke (elemento específico joke que contém apenas a piada)
 };


window.onload = () => fetchJoke();
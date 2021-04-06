         /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 ok*Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 ok*Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 ok*Crie uma função que mude a cor do quadrado vermelho para branco.
 ok*Crie uma função que corrija o texto da tag <h1>.
 ok*Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 *Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */

let quad = document.getElementsByTagName("div");
for (let i = 0; i < quad.length; i += 1) {
  quad[0].style.backgroundColor = "rgb(76,164,109)";
  quad[1].style.backgroundColor = "white";
  }

document.getElementsByTagName("h1")[0].innerText = "Exercício 5.1 - JavaScript ";

let texto = document.getElementsByTagName("p");
for (let j = 0; j < texto.length; j += 1) {
texto[0].style.textTransform = "uppercase";
texto[0].innerText = "Eu me vejo trilhando outros caminhos na carreira de tecnologia e sendo bem sucedida e feliz";
console.log(document.getElementsByTagName("p"));
}
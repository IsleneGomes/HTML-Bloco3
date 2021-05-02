let skills = ['JavaScript', 'HTML', 'CSS', 'Node', 'Java'];
function one(frase) {
let fraseinteira = frase.replace('x', 'Bebeto');
return fraseinteira;
}
let frase = 'Tryber x aqui!';
console.log(one(frase));
console.log('**************Parte 2**************');
let newString = skills.sort();
console.log(`${frase} Minhas cinco principais habilidades são: ${newString}`)
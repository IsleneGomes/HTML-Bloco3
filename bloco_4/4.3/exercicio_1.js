//1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n
let n = 2;
let asterisco = '*';
let sum = '';
for(let i = 0 ;i < n; i+= 1) {
    sum = sum + asterisco;
}
for(let i = 0 ;i < n; i+= 1) {
console.log(sum);
}
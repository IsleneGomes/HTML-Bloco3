//Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar
let n = 5;
let asterisco = '*';
let sum = ' ';
let altura = (n + 1)/2;
let sumRight = altura;
let sumLeft = altura;
let base = n;

for(let i = 0 ;i < altura; i+= 1) {
    for (let j = 0; j <= n; j += 1){
        if (j >= sumLeft && j <= sumRight) {
            sum = sum + asterisco;
        }else {
            sum = sum + ' ';
        }
        
    }
    if (sumRight === altura && sumLeft === altura) {
        sum = sumLeft + '' + sumRight;
    }
    //console.log(sum);
    sumRight += 1;
    sumLeft -= 1;
    sum = ' ';
}


//Faça um programa que diz se um número definido numa variável é primo ou não.
//Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
//Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.

//Fazer depois, não dei conta

let number = 548;

 if (number === 2 || number === 3 || number === 5 || number === 7){
   console.log('Esse número é primo');
    if (number%2 === 0 || number%3 === 0 ||number%5 === 0 || number%7 === 0) {
   console.log('Esse número não é primo');
    }
 } else {
   console.log('Esse número é primo');
    }
 

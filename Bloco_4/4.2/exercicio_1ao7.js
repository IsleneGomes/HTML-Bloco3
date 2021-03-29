let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 /*Exercício 1: */
 console.log(numbers.length);
 console.log("*********Fim Exe 1******************");

 /*Exercício 2: */
 
 let soma = 0;
 for (let i = 0; i < numbers.length; i += 1) {
  soma = soma + numbers[i];
 }
 console.log(soma);
 console.log("*********Fim Exe 2******************");

/*Exercício 3: */
let sum = 0;
let media= 0
for (let i = 0; i < numbers.length; i += 1) {
 sum = sum + numbers[i];
 media = sum/numbers.length;
}
console.log(media);
console.log("*********Fim Exe 3******************");

/*Exercício 4: */
if (media > 20) {
    console.log("Valor maior que 20")
}else {
    console.log("Valor menor que 20")
}
console.log("*********Fim Exe 4******************");

/*Exercício 5: */
let maiorNumero = 0;
for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > maiorNumero ) {
        maiorNumero = numbers[i];
    }
   }
   console.log(maiorNumero);
   console.log("*********Fim Exe 5******************");

   /*Exercício 6: */
   let add=0;
   let addImpar=0;
for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0 ) {
        //console.log("O número",numbers[i],"é par");
        add = add + 1;
    }else if (numbers[i] % 2 !== 0 ){
        console.log("O número",numbers[i],"é ímpar");
        addImpar = addImpar +1;
    }else if (addImpar === 0) {
        console.log("Nenhum valor ímpar encontrado");

    }
   }
   console.log("Existem",add,"números pares");
   console.log("Existem",addImpar,"números ímpares");
   console.log("*********Fim Exe 6******************");

    /*Exercício 7: */
for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > maiorNumero ) {
        maiorNumero = numbers[i];
    }
}
let numero1 = maiorNumero;
for (let i = 0; i < numbers.length; i += 1) {
    if ( numbers[i]< numero1) {
        numero1 = numbers[i];
   }
}
   console.log(numero1);
   console.log("*********Fim Exe 7******************");
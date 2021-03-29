//Faça uma pirâmide com n asteriscos de base
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
    console.log(sum);
    sumRight += 1;
    sumLeft -= 1;
    sum = ' ';
}
//Muito difícil isso! Acertar esses espaços dentro do '' foi a treva tb.
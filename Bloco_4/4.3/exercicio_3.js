//3- Agora inverta o lado do triângulo
let n = 5;
let asterisco = '*';
let sum = '';
let base = n;
for(let i = 0 ;i <= n; i+= 1) {
    for (let j = 0; j <= n; j += 1){
        if (j < base) {
            sum = sum + ' ';
        }else {
            sum = sum + asterisco;
        }
    }
    console.log(sum);
    sum = '';
    base -= 1;
}
//Achei tenso hein!
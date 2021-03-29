let salarioBruto = 3000;
let INSS = 0;
let IR = 0;

if (salarioBruto <=1156.94) {
    INSS = salarioBruto*0.08;
} else if (salarioBruto <=2594.92 & salarioBruto > 1156.94) {
    INSS = salarioBruto*0.09
}else if (salarioBruto <=5189.82 & salarioBruto > 2594.92) {
    INSS = salarioBruto*0.11
}else if (salarioBruto > 5189.82) {
    INSS = 570.88
}

let salarioComINSS= salarioBruto -INSS;

if(salarioComINSS<=1903.98){
    IR = 0;
}else if (salarioComINSS > 1903.98 & salarioComINSS<=2826.65){
    IR = (salarioComINSS*0.075 - 142.80);
}else if (salarioComINSS>2825.65 & salarioComINSS<=3751.05){
    IR = (salarioComINSS*0.15 - 354.80);
}else if (salarioComINSS>3751.05 & salarioComINSS<=4664.68){
    IR = (salarioComINSS*0.225 - 636.13);
}else if (salarioComINSS>4664.68){
    IR = (salarioComINSS*0.275 - 869.36);
}

let salarioLiquido = (salarioBruto - INSS - IR);

console.log("Ao receber um Salário Bruto de", salarioBruto, " o Salário Líquido a ser recebido será: ",salarioLiquido);

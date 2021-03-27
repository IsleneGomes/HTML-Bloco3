let sorteioMega = [2, 52, 15, 60, 58, 15];
let oneNumber = Math.ceil(Math.random()*60);
let twoNumber = Math.ceil(Math.random()*60);
let threeNumber = Math.ceil(Math.random()*60);
let fourNumber = Math.ceil(Math.random()*60);
let fiveNumber = Math.ceil(Math.random()*60);
let sixNumber = Math.ceil(Math.random()*60);
let numerogerado = [];

numerogerado.push(oneNumber, twoNumber, threeNumber, fourNumber, fiveNumber, sixNumber);

console.log("O número sorteado na mega-sena foi:",sorteioMega);
console.log("O jogado na mega-sena foi:",numerogerado);
let acerto = 0;

for (let i = 0; i < sorteioMega.length ; i=+1) {
    let numeroSorteado = sorteioMega[i];
    for (let j = 0; j < numerogerado.length; j=+1) {
        let numeroEscolhido = numerogerado[j];
          if (numeroEscolhido === numeroSorteado) {
            acerto = acerto +1;
            console.log("Acertos:",acerto);
          }
    }
}
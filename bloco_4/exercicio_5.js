let anguloA = 80;
let anguloB = 70;
let anguloC = 80;

let somaDosAngulos = anguloA + anguloB + anguloC;

switch (true) {
    case (somaDosAngulos === 180):
    console.log("true");
    break;
    case (somaDosAngulos < 180 & somaDosAngulos > 0):
    console.log("false");
    break;
    case (somaDosAngulos > 180):
    console.log("false");
    break;
    case (somaDosAngulos < 0):
    console.log("inválido");
    break;
}
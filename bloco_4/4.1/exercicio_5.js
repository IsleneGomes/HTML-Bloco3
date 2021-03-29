let anguloA = 80;
let anguloB = -80;
let anguloC = 80;

let somaDosAngulos = anguloA + anguloB + anguloC;

if (anguloA > 0 & anguloB > 0 & anguloC > 0) {
  switch (true) {
    case (somaDosAngulos === 180):
    console.log("true");
    break;
    case (somaDosAngulos < 180):
    console.log("false");
    break;
    case (somaDosAngulos > 180):
    console.log("false");
    break;
  }
}
else {
    console.log("inválido"); 
}
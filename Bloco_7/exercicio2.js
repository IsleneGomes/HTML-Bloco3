const oddsAndEvens = [13, 3, 4, 10, 7, 2];
function ordem() {
const newarray = [];
  for (let i = 0; i < oddsAndEvens.length; i += 1) {
    for (let j = 0;  j < oddsAndEvens[i]; j += 1) {
        newarray.push(oddsAndEvens[i]); //que doideira!
        console.log(newarray);
      }
    }
  }



console.log(`Os números ${ordem()} se encontram ordenados de forma crescente!`);

oddsAndEvens.sort((oddsAndEvens, b) => oddsAndEvens - b);

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);
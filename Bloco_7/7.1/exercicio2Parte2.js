const longestWord = frase => {
  let arrayfrase = frase.split(' ');
  let tamanhoPalavra = 0;
  let maior = '';
  for (let palavra of arrayfrase) { 
    if (palavra.length > tamanhoPalavra) {
      tamanhoPalavra = palavra.length;
      maior = palavra;
    }
  }
  return maior;
}
console.log(longestWord("Muito louco esse bloco gente!"));
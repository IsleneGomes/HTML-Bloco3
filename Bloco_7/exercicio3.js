const fatorial = numero => {
  if (numero >= 0) {
  let valor = 1;
    for (let index = 1; index <= numero; index += 1) {
      valor = valor * index;
    }
        return valor;
  } else {
    return ('Error');
  }
  return valor;
} 
console.log(fatorial(4))
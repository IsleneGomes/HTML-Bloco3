const array = Array.from(
{length: 10},
() => (Math.ceil(Math.random()*(50 - 1))
)**2);

const sum = array.reduce((acc, curr) => acc + curr,0);
console.log(sum);
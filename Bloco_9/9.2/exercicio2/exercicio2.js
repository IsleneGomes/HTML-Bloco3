const fetchPromise = () => {
const promise = new Promise((resolve, reject) => {
const array = Array.from(
{length: 10},
() => (Math.ceil(Math.random()*(50 - 1))
)**2);

const sum = array.reduce((acc, curr) => acc + curr,0);

 if (sum  < 8000) resolve();
 reject();
})
promise
  .then(() => console.log('Promise resolvida'))
  .catch(() => console.log('Promise rejeitada'))
}
fetchPromise();
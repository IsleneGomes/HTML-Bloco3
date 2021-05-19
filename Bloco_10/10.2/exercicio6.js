const animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByType = (name) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = animals.find((animal) => animal.name === name);
      if (arrayAnimals) {
        return resolve(arrayAnimals);
      };
      return reject('Nenhum animal com esse nome!');
    }, 100);
  })
);

const getAnimal = (name) => {
  return findAnimalsByType(name)
  .then(animal => animal)
};

module.exports = getAnimal
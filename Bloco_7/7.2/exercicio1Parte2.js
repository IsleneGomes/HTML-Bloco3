const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const novoturno = (obj, turno, hora) => {
obj[turno] = hora;
}
novoturno(lesson2, 'turno', 'manhã')

const keys = (obj) => {
Object.keys(lesson3);
}

const arraylength = (obj) => Object.keys(obj).length;

const value = (obj) => Object.value(obj);

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

const estudantes = () => {
const total = allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes;
return total
}
console.log(estudantes());

const position = (obj, index) => Object.value(obj, index);

const existencia = (obj, key, value) => {
const pares = Object.entries(obj);
const isEqual = false;
  for (let index in pares) {
    if (pares[index][0] === key && pares[index][1] === value) {
      isEqual === true;
    }
  }
  return isEqual;
}
console.log(existencia(lesson2,'professor','Carlos'));
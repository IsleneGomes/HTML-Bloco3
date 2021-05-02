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
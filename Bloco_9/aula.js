// const assert = require('assert');

// const pushNumber = (list, number) => list.push(number);

// let numbers = [];

// pushNumber(numbers, 1);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// assert.deepStrictEqual(numbers, [1, 2, 3]);

// const assert = require('assert');

// const pushNumber = (list, number) => list.push(number);

// let numbers = [];

// setTimeout(() => pushNumber(numbers, 1), 3000);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// assert.deepStrictEqual(numbers, [1, 2, 3]); // essa validação falha

// const assert = require('assert');

// const pushNumber = (list, number) => {
//   list.push(number);
//   console.log(list);
// };

// let numbers = [];

// setTimeout(() => pushNumber(numbers, 1), 3000);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// setTimeout(() => assert.deepStrictEqual(numbers, [2, 3, 1]), 3000);

const myExpenses = [ //Constante com as minhas despesas
  {
    gym: 99,
  },
  {
    ifood: 200,
  },
  {
    phone: 60,
  },
  {
    internet: 100,
  },
];

const myIncome = 1000; //Constante com o meu salário

const monthlyBudget = (myIncome, myExpenses, callback) => { //Função dá o valor de recebido, gasto e o saldo

  const totalExpenses = callback(myExpenses); //Callback responsável por somar todas as despesas
  const totalAfterExpenses = myIncome - totalExpenses; //Constante responsável pelo saldo

  console.log(`Balanço do mês: 
    Recebido: R$${myIncome},00
    Gasto: R$${totalExpenses},00
    Saldo: R$${totalAfterExpenses},00 `); //Print de cada item
};

const handleExpenses = myExpenses => { //Função responsável por calcular o total das despesas
  const eachValue = myExpenses.map((item) => Object.values(item)[0]); //Cria um novo array(map) apenas com os valores da chave item(object value)
  const totalExpense = eachValue.reduce((acc, curr) => acc + curr , 0); //Soma o array com os valores(object value) e retorna um único número(somatória)
  return totalExpense;
};

monthlyBudget(myIncome, myExpenses, handleExpenses); //Invoca a função responsável por dar o valor de recebido, gasto e o saldo passando como parâmetro o salario, as despesas e a função que calcula a somatória das despesas.
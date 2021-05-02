const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
const nome = order.order.delivery.deliveryPerson;
const entrega = order.name;
const telefone = order.phoneNumber;
const endereco = order.address.street;
const numeroend = order.address.number;
const apt = order.address.apartment;
console.log(`Olá ${nome}, entrega para ${entrega}, telefone ${telefone}, ${endereco}, Nº: ${numeroend}, APT: ${apt}`)
}

customerInfo(order);

const orderModifier = (order) => {
const nome = order.order.delivery.deliveryPerson = 'Luiz Silva';
const pedido1 = Object.keys(order.order.pizza);
const bebida = order.order.drinks.coke.type;
const valor = order.payment.total = '50';

console.log(`Olá ${nome}, o total do seu pedido de ${pedido1} e ${bebida} é ${valor}.`)
}

orderModifier(order);
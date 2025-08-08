const numbers = [47, 1, 89, 25, 66, 7.7, 72, 8, 90, 38, 51, 63];

let total = 0;

const somaTotal = numbers.reduce((acc, cv) => acc + cv, 0);

console.log(somaTotal);

const cart = [
    { id: 1, name: 'Notebook', price: 3500 },
    { id: 2, name: 'Mouse Gamer', price: 150 },
    { id: 3, name: 'Teclado Mecânico', price: 250 },
    { id: 4, name: 'Monitor 24"', price: 900 },
    { id: 5, name: 'Headset', price: 300 },
    { id: 6, name: 'Cadeira Gamer', price: 1200 },
];

const cartValue = cart.reduce((acc, cv) => acc + cv.price, 0);

console.log(cartValue);


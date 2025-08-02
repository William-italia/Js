let x;

const fruits = ['apple', 'banana', 'orange', 'pear'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

// x = fruits.concat(berries);
// spread operator (...)

// x = [...fruits, ...berries];

fruits.push(berries);
x = fruits.flat();


console.log(x);

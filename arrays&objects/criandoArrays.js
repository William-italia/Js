let x;

// array literal
const numbers = [12, 32, 52, 19, 40];

// array Constructor
const fruits = new Array('apple', 'banana', 'orange');

x = numbers[0];

x = numbers[0] + numbers[3];

x = `My favorite fruit is an ${fruits[0]}`;

x = fruits

fruits[fruits.length] = "peach"
fruits[fruits.length] = "blueberry"

fruits.unshift('pedra1');
fruits.push('pedra2');

fruits.reverse();

x = fruits.includes("peach")
x = fruits.indexOf('peach');
x = fruits;
arr = fruits.slice(3, 6)

arr = arr.sort().toString();

console.log(arr);

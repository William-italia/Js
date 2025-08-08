const numbers = [47, 1, 89, 25, 66, 7.7, 72, 8, 90, 38, 51, 63];

const map1 = numbers.map((num) => {
    return num * 2;
}).filter((num) => num % 2 === 0);

console.log(map1);

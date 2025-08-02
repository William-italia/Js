const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// [1,2,3,4,5,6,7,8,9,10]

const arr3 = [...new Set([...arr1, ...arr2])];
// let arr3 = [...arr1, ...arr2];
// arr3.splice(4, 1);

console.log(arr3);

arr1.unshift(0)
arr1.push(6)
arr1.reverse();

console.log(arr1);

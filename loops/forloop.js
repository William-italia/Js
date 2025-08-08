// for (let l = 1; l <= 5; l++) {
//     let text = '';

//     for (let e = 1; e <= 5 - l; e++) {
//         text += ' ';
//     }

//     for (let j = 1; j <= l; j++) {
//         text += '*'
//     }

//     console.log(text);
// }

// for (let b = 9; b <= 9; b++) {
//     for (let n = 1; n <= 10; n++) {
//         console.log(`${b} x ${n} = ${b*n}`);
//     }
// }

// const names = ['william', 'Vanessa', 'Livia', 'Felipe', 'Renata'];

// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }

const numeros = [1, 2, 3 ,4 ,5 ,6];

for (const num of numeros) {
    console.log(num);
}

const colorObj = {
    color1: 'red',
    color2: 'blue',
    color3: 'green',
    color4: 'yellow',
    color5: 'purple',
    color6: 'orange',
    color7: 'pink',
    color8: 'black',
    color9: 'white',
    color10: 'gray'
};

for (const key in colorObj) {
    console.log(key, colorObj[key]);
}

const colorArr = ['red', 'yellow', 'blue', 'orange', 'green'];

for (const color in colorArr) {
    console.log(colorArr[color]);
}

// for (const color of colorArr) {
//     console.log(color);
// }
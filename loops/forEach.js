const colorArr = ['red', 'yellow', 'blue', 'orange', 'green'];

// console.log(colorArr.__proto__);

// colorArr.forEach((el) => {
//     console.log(el);
// })

// colorArr.forEach(function (el) {
//     console.log(el);
// })

// colorArr.forEach((el, index, arr) => {
//     console.log(`${index} - ${el}`);
// })

function colors(color, ind) {
    console.log(`${ind +1} - ${color}`);
}

// colorArr.forEach(colors);

const colorObj = [
  { color: 'red', tonality: 'dark' },
  { color: 'blue', tonality: 'cool' },
  { color: 'green', tonality: 'natural' },
  { color: 'yellow', tonality: 'bright' },
  { color: 'purple', tonality: 'deep' },
  { color: 'orange', tonality: 'warm' },
  { color: 'pink', tonality: 'soft' },
  { color: 'black', tonality: 'solid' },
  { color: 'white', tonality: 'clean' },
  { color: 'gray', tonality: 'neutral' }
]

colorObj.forEach((el, ind) => {
    console.log(`${ind+1} - ${el.color} ${el.tonality}`);
});
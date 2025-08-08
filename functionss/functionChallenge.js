function getCelsius(Fh) {
    let Celsius;

    Celsius = Math.round((Fh - 32) * 5 / 9);

    return `A temperatura é ${Celsius}\xB0C`;
}

console.log(getCelsius(78));

function minMax(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);

    return {min, max}
}

console.log(minMax([1, 2, 3, 4, 5]));

((length, width) => {   
    const area = length * width;

    const output =  `A área de um retângulo com comprimento ${length} e largura ${width} é ${area}.`;
    console.log(output);
    
})(10, 5);
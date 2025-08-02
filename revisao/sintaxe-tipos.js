let a = "22";
let b = "17";

let c = (+a) + (+b);
 
console.log(c, typeof c);

let coffees = ["French Roast", "Colombian", "Kona"];
let fish = ["Lion", , "Angel"];

fish[1] = 'Cat';

console.log(fish);

// let pessoal = "Meu";

function tipoCarro(nome) {
    if (nome === "Citroen") {
        return nome;
    } else {
        return "Desculpa, Não temos o " + nome + ".";
    }
}

let carro = {
    nome: "C3",
    getMarca: tipoCarro("Citroen"),
}

// console.log(carro.especial);
console.log(carro.nome);
console.log(carro.getMarca);

const nome = "william";
const sobrenome = "italia";
const idade = 21;
const peso = 90; // em kg
const altura = 1.80; // em metros

const imc = peso / (altura * altura);

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg, tem ${altura}m de altura e seu IMC é de ${imc.toFixed(2)}.`);

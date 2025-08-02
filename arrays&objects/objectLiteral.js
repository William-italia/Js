let x;

const person = {
    name: 'william italia',
    age: 21,
    isAdmin: true,
    endereco : {
        rua: 'av gov pedro 2123',
        cidade: 'bosta',
        estado: 'lixo',
        pais: 'lixeira'
    },
    hobbies: ['sports', 'games', 'music'],
}

x = person.isAdmin;
x = person.age;
x = person.endereco.pais
x = person.hobbies[1];
person.name = 'vanessa italia'
person.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
};

x = person.name;

x = person.greet();

delete person.endereco.cidade;
console.log(x);

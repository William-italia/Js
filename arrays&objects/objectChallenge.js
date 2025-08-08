const library = [
  {
    title: 'O Futuro da Tecnologia',
    author: 'Bill Gates',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Steve Jobs',
    author: 'Walter Isaacson',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Jogos Vorazes: A Esperança',
    author: 'Suzanne Collins',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

const {author: terceiroAutor} = library[2];

console.log(terceiroAutor);

const str = JSON.stringify(library);
console.log(str);
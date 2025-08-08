let x;

const firstName = 'william';
const lastName = 'italia';
const age = 21;

const person = {
    firstName,
    lastName,
    age
}

x = person.firstName;

const todo = {
    id: 1,
    title: 'Take out trash',
    user: {
        name: 'william',
    },
};
const { id: todoId, title, user: {name}} = todo;

// const id = todo.id;

console.log(`Id: ${todoId}, title: ${title}, user: ${name}`);


const nums = [1, 2, 3, 4, 5];

const [um, dois, ...rest] = nums;

console.log(um, dois, rest);

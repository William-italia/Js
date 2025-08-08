let x;

const todo = new Object();

todo.id = 1;
todo.name = "buy milk";
todo.completed = false;

x = todo;

const person = {
    address: {
        coords: {
            lat: 42.7864,
            lng: -32.3423,
        }
    }
}

x = person.address.coords.lng;

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};

const obj3 = {...obj1, ...obj2};
x = obj3;

const todos = [
    {id: 1, name: 'buy milk'},
    {id: 2, name: 'pickup kids from school'},
    {id: 3, name: 'take out trash'},
];

x = todos[2].name;

x = Object.keys(todo);
x = Object.keys(todo).length;

x = Object.values(todo)

x = todo.hasOwnProperty('age')

console.log(x);

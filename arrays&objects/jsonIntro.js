const post = {
    title: 'post one',
    body: 'this is body',
}

// convert to Json string

const str = JSON.stringify(post);

// parse Json

const obj = JSON.parse(str)
console.log(obj);

const posts = [
    {
        id: 1,
        title: 'Post One',
        body: 'This is the body',
    },
    {
        id: 2,
        title: 'Post Two',
        body: 'This is the body',
    },
];

const str2 = JSON.stringify(posts);

console.log(str2);

const obj2 = JSON.parse(str2);
console.log(obj2);
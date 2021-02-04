// spread operator fo array use

const arr1 = [1,2,3,4];

const arr2 = [5,6,7,8,9];
const array = [...arr1, ...arr2];
console.log(array);

// spread operator fo object
const person1 = {
    name: 'jagadish chakma',
    age: 23,
    study: 'BBA'
}

const person2 = {
    name: 'namita chakma',
    age: 24,
    study: 'HSC'
}

const person = {...person1, ...person2};
console.log(person);
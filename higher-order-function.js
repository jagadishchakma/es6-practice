function main() {
    return function() {
        console.log('I am real higher order function definition');
    }
}

const result = main();
result();

// without higjer order function usecase or example one

const array = [1, 2, 3, 4];
const newArray = [];
for(let i = 0; i < array.length; i++){
    newArray.push(array[i] * 4);
}
console.log(newArray)

// with higher order function usecase or example

const arr2 = [1, 2, 3, 4, 5];
const result2 = arr2.map((element) => element * 4);
console.log(result2)

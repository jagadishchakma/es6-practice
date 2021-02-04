// the most usecase filter() methods
const roll = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = roll.filter((element)=>{
    return element % 2 == 0;
})

console.log(result);
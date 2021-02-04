const arr = [1,2,3,4,5,6,7,89,];
const result = arr.reduce((prev, current, index, arr)=>{
    return prev + current;
}, 0);
console.log(result);
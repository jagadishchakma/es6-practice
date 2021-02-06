
// const b = 4;
// function sum() {
//     const a = 3;
//     return function(){
//         return a - b;
//     }
// }
// const result = sum();
// console.log(result());
// console.dir(result)

for(var i = 0; i < 4; i++){
    const test = ()=>{
        console.log(i);
    }
   setTimeout(test,10000)
   console.log(i)
   console.dir(test)
}

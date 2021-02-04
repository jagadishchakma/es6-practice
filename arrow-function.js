// convart js a normal function to arrow function
// normal function 
function normalFunction(){
    return 'normal function';
}
console.log(normalFunction());

// convert to arrow function 
const arrowFunction = ()=>{
    return 'arrow function';
}
console.log(arrowFunction());

// simpliy a arrow function 
const simplyArrow = () => 'arrow function simply';
console.log(simplyArrow());

// arrow function simplify for one parameter
const apArrowSimplify = a => a + 10;
console.log(apArrowSimplify(12));

// arrow function for multiple parameter
const mpArrowSimplify = (a, b) => a + b;
console.log(mpArrowSimplify(12, 20));

// arrow function for this keyword

const js = {
    name: 'JavaScript',
    libraries: ['React', 'Angular', 'Vue'],
    printLibraries: function(){
        this.libraries.forEach((element)=>{
            console.log(`${this.name} loves ${element}`);
        })
    }
}
js.printLibraries();


// arrow function advanced and avoid  error

document.getElementById('search').addEventListener('keyup', output);

function output() {
    document.getElementById('type').innerText = this.value;
}

// output=()=>{
//     document.getElementById('type').innerText = this.value;
// }
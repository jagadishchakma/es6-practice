// falsy = 0, "" empty string, undefined, null, NaN, false


// 0 is falsy
const roll = 0;
if(roll) {
    console.log(roll);
}else{
    console.log(`${roll} is falsy`);
}


// empty string is falsy;
const name = "";
if(name) {
    console.log(name);
}else{
    console.log(`empty string is falsy${name}`)
}

// undefined is falsy
let study;
if(study){
    console.log(study);
}else{
    console.log(`${study}  is falsy`);
}

// null is falsy

const country = "";
if(country){
    console.log(country);
}else{
    console.log(`${country} null is falsy`);
}

// NaN is falsy
const number = NaN;
if(number){
    console.log(number);
}else{
    console.log(`${number} is falsy`);
}

// false boolean value already falsy
const status = false;
if(status) {
    console.log(status);
}else{
    console.log(`${status} is falsy`);
}

// otherwise all values are truthy
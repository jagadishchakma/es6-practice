//for in loop usecase one
const person = {
    name: 'Jagadish Chakma',
    age: 23,
    study: 'BBA',
    passions: 'JavaScript'
}

for(property in person){
    console.log(person[property])
}

// for in loop usecase two
const friends = ['Surjo Moni Chakma', 'Jiten Chakma', 'Punno Moni Chakma'];
for(element in friends){
    console.log(element);
}
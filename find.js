// find or get specific resutl using condition set 
const numbers = [1, 2, 3, 4, 5, 6, 7];
const result = numbers.find(function(element){
    return element > 5;
})
console.log(result);

// this parameter uses for in for loop
class Student{
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }

    hello() {
        console.log("Hey, " + this.name);
    }

    helloWith() {
        const gpa = [3.56, 3.57, 4.00];
        gpa.find(function(get){
           this.hello();
        }, this);
    }
}
const jagadish = new Student('Jagadish Chakma', 23);
jagadish.helloWith();
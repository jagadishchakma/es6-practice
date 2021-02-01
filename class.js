// function Students(id, name) {
//     this.id = id;
//     this.name = name;
// }

// const juleka = new Students(12, 'juleka');
// const niyata = new Students(13, 'niyata');

// console.log(juleka.name, niyata.name);

class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.school = "Shapchari High School";
    }
}

const juleka = new Student(12, 'Juleka Chakma');
const niyata = new Student(13, 'Niyata Chakma');

console.log(juleka.name, niyata.name);
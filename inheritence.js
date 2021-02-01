class Father{
    constructor() {
        this.father = "Punno Raja";
    }
}


class Child extends Father{
    constructor(son) {
        super();
        this.son = son;
    }

    fullName() {
        return this.son + " " + this.father;
    }
}

const son1 = new Child('Manek');
const son2 = new Child('Surojoy');

console.log(son1.fullName());
console.log(son2.fullName());
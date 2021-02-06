const normalPerson = {
    fname: 'Rahim',
    lname: 'Uddin',
    salary: 1500,
    fullName: function() {
        console.log(this.fname, this.lname);
    },
    chargeBill: function(amount, tips, tax){
        console.log(this.salary - amount - tips - tax);
    }
}

const heroPerson = {
    fname: 'Hero',
    lname: 'Balama',
    salary: 2500,
}

const friendlyPerson = {
    fname: 'Hero',
    lname: 'Kalam',
    salary: 2500,
}

// const heroResult = normalPerson.chargeBill.bind(heroPerson);
// heroResult(500)
// heroResult(800)
// heroResult(1500)

// const friendlyResult = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyResult(80)

// normalPerson.chargeBill.call(heroPerson, 300,50,10)

normalPerson.chargeBill.apply(heroPerson, [400, 300, 200]);
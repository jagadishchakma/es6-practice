const person = {
    name: 'Jagadish Chakma',
    age: 23,
    gf: 'Namita Chakma',
    friends: ['Surjo Moni Chakma', 'Jotis Moni Chakma', 'Punno Moni Chakma', 'Namita Chakma', 'Suki Moy Chakma'],
    address: 'Bodhipur , Rangamati Sadar',
    father: 'Bijoy Chandra Chakma',
    mother: 'Kala Mila Chakma',
    study: {
        psc: 'PSC',
        jsc: 'JSC',
        ssc: 'SSC',
        hsc: 'HSC'
    },
    skills: ['HTML', 'CSS', 'JS', 'PHP', 'Laravel', 'React']
}

const {hsc} = person.study;
const {name} = person;
const [one, ...list] = person.friends;

console.log(hsc, name, one, list);
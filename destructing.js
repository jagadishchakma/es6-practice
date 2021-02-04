
// destructing usefull for objects
const person = {
    name: 'Bangladesh',
    inde: 1971,
    from: 'Pakistan',
    about: {
        peoples: 18,
        district: 64,
        capital: 'Dhaka',
        city: ['Rangamati', 'Kagrachari', 'Bandarban']
    }
}

const {name, inde, from, about:{capital, city: [,k]}} = person;
console.log(name, inde, from, capital, k);


// destructing usefull for arrays

const country = ['Bangladesh', 'America', 'Canada', 'Pakistan'];
const [,,c] = country;
console.log(c)
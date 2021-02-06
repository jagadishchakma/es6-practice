
function loadData() {
    const load = fetch('https://jsonplaceh older.typicode.com/users');
    const res = load.then(formate => formate.json());
    const data =  res.then(data => console.log(data));
    return data;
}

loadData();
function countries(api) {
    fetch(api)
    .then(res => res.json())
    .then(data => {
        data.map((element)=>{
            getData(element)
        })
    })
}
countries('https://restcountries.eu/rest/v2/all')
const container = document.getElementById('countries');
function getData(element) {
    const div = document.createElement('div');
    // div
    div.style.cssText = "margin: 20px auto; background-color: hotpink; padding: 10px; font-size:20px; width: 500px";
    container.appendChild(div);
    // country name </h1>
    const h1 = document.createElement('h1');
    h1.style.cssText = "text-align: center; border: 1px solid red; padding: 10px";
    h1.textContent = element.name;
    div.appendChild(h1)
    // ul list data
    const ul = document.createElement('ul');
    ul.innerHTML = `
    <li>Capital: <strong>${element.capital}</strong></li>
    <li>Area: <strong>${element.area}</strong></li>
    <li>Population: <strong>${element.population}</strong></li>
    <li>Flag: <img src="${element.flag}" width="80px"></li>
    `;
    div.appendChild(ul);
}
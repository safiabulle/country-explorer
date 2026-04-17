async function getCountry(){

    const name = document.getElementById("countryInput").value;

    const response = await fetch(
        `https://restcountries.com/v3.1/name/${name}`
    );

    const data = await response.json();

    const country = data[0];

    document.getElementById("result").innerHTML =`
    <h2>${country.name.common}<h2>
    <img src="${country.flags.png}">
    <p>Capital: ${country.capital}</p>
    <p>Population: ${country.population}</p>
    <p>Region: ${country.region}</p>
    `;

}
module.exports = { getCountry };
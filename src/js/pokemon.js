const url = "https://github.com/robert-z/simple-pokemon-json-api/blob/master/data/pokemon.json";
// ?limit=1000&offset=20
let results = null;
async function getPokemon(url) {
    const response = await fetch(url);
    //check to see if the fetch was successful
    if (response.ok) {
        // the API will send us JSON...but we have to convert the response before we can use it
        // .json() also returns a promise...so we await it as well.
        const data = await response.json();
        doStuff(data);
    }
}


function doStuff(data) {
    results = data;
    console.log("first: ", results);
    results.results.forEach((pokemon) => {
        const image = document.createElement("img");
        option.src = pokemon.name;
        document.querySelector("#cards").appendChild(option);
        // assumes you have a <main> element in your HTML document
    });
}


getPokemon(url);
console.log("second: ", results);
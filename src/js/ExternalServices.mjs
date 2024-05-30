//https://pokeapi.co/api/v2/pokemon/
const baseURL = import.meta.env.VITE_SERVER_URL
const baseURL1 = import.meta.env.VITE_SERVER_URL1

//ok
async function convertToJson(res) {
    const jsonResponse = await res.json();

    if (res.ok) {
        return jsonResponse;
    } else {
        throw { name: 'servicesError', message: jsonResponse };
    }
}

export default class ExternalServices {

    async getData() {
        const response = await fetch(baseURL);
        const data = await convertToJson(response);
        console.info(data)
        // return data.results;

        // let pokemonArray = [];
        // for (let i = 0; i < data.results; i++) {
        //     pokemonArray.push({ name: data.results[i], id: i + 1 });
        // }

        let pokemonArray = data.results;

        for (var i = 0; i < pokemonArray.length; i++) {
            pokemonArray[i].id = i + 1;
        }

        return pokemonArray;
    }






    async findPokemonById(id) {
        this.getData("tents");

        const response = await fetch(baseURL1 + `pokemon/${id}`);
        //console.table(response)
        const data = await convertToJson(response);
        //console.table(data)
        return data.results;
    }



}

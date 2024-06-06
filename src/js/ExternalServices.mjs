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

        let pokemonArray = data.results;

        for (var i = 0; i < pokemonArray.length; i++) {
            pokemonArray[i].id = i + 1;
        }

        return pokemonArray;
    }

    async findPokemonById(id) {
        this.getData("pokemon");
        const response = await fetch(baseURL1 + `pokemon/${id}`);
        return data.results;
    }

}

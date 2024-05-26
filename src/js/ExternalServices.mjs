//https://pokeapi.co/api/v2/pokemon/
const baseURL = import.meta.env.VITE_SERVER_URL

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
        return data.results;
    }
}

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


// function doStuff(data) {
//     let results = data;
//     console.log('first: ', results);
//     results.results.forEach((pokemon) => {
//         const option = document.createElement("option");
//         option.textContent = pokemon.name;
//         document.querySelector("#cards").appendChild(option);
//         // assumes you have a <main> element in your HTML document
//     });
// }


export default class ExternalServices {
    // constructor() {
    //     /* this.category = category;
    //     this.path = `../json/${this.category}.json`; */
    // }

    // async getData(category) {
    async getData() {
        const response = await fetch(baseURL);
        const data = await convertToJson(response);
        console.info(data)
        return data.results;


        // doStuff(data);
    }


    // async findProductById(id) {
    //     this.getData("tents");

    //     const response = await fetch(baseURL + `product/${id}`);
    //     //console.table(response)
    //     const data = await convertToJson(response);
    //     //console.table(data)
    //     return data.Result;
    // }



    // async checkout(formObject) {
    //     const options = {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(formObject)
    //     };

    //     try {
    //         return fetch(baseURL + "checkout/", options).then(convertToJson);
    //     } catch (error) {
    //         console.error("error during checkout:", error);
    //     }
    // }


}

import { renderListWithTemplate } from "./utils.mjs";


// function pokemonCardTemplate(pokemon) {
//     return `<div class="pokemon-card">
//         <h1>${pokemon.name}</h1>
//         </div>`;
// }

function pokemonCardTemplate(pokemon) {
    return `<div class="pokemon-card">
        <img src ="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" alt="Image of ${pokemon.name}" class="pimage"/>
        <h1>${pokemon.name}</h1>
        <h1>${pokemon.id}</h1>
        </div>`;
}

export default class PokemonListing {

    constructor(dataSource, listElement, search, searchResult) {
        this.dataSource = dataSource;
        this.listElement = listElement;
        this.search = search;
        this.searchResult = searchResult;
    }

    async init() {
        console.log("list")
        const list = await this.dataSource.getData();
        this.renderList(filterListBySix(list));
    };

    renderList(list) {
        renderListWithTemplate(pokemonCardTemplate, this.listElement, list);
    };
}

function filterListBySix(list) {
    return list.sort(function () { return 0.5 - Math.random() }).slice(0, 6);
}

function filterListBySearch(list, searchWord) {
    return list.filter(item => {
        const brandName = item.Brand.Name.toLowerCase();
        const name = item.Name.toLowerCase();
        const nameWithoutBrand = item.NameWithoutBrand.toLowerCase();
        const search = searchWord.toLowerCase();
        const result = brandName.includes(search) || name.includes(search) || nameWithoutBrand.includes(search);
        return result;
    });
}


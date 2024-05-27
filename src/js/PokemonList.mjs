import { renderListWithTemplate } from "./utils.mjs";

function pokemonCardTemplate(pokemon) {
    return `<div class="pokemon-card">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" loading="lazy" alt="Image of ${pokemon.name}" class="pimage"/>
        <audio class="roar" preload="none" width="100%" height="auto" controls controlsList="nodownload noplaybackrate">
            <source src="https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${pokemon.id}.ogg" type="audio/ogg">
        </audio>
        <h1 id="pokemon-id">#${pokemon.id}</h1>
        <h1 id="pokemon-name">${pokemon.name}</h1>
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
        this.renderList(filterListByEight(list));
    };

    renderList(list) {
        renderListWithTemplate(pokemonCardTemplate, this.listElement, list);

        this.search.addEventListener("submit", async (event) => {
            event.preventDefault();
            const searchWord = document.getElementById("search-input").value;

            this.listElement.innerHTML = '';
            const originalList = filterListByEight(list);
            const newList = filterListBySearch(filterListByEight(list), searchWord);

            renderListWithTemplate(pokemonCardTemplate, this.listElement, newList);

            if (newList.length > 0) {
                this.searchResult.style.display = "inline-block";
                this.searchResult.innerHTML = newList.length + " " + (newList.length === 1 ? "result" : "results");
            }
            if (newList.length == originalList.length) {
                this.searchResult.style.display = "none";
            }

        }
        );

    };
}

function filterListByEight(list) {
    // return list.sort(function () { return 0.5 - Math.random() }).slice(0, 8);
    return list;
}

function filterListBySearch(list, searchWord) {
    return list.filter(pokemon => {
        const name = pokemon.name.toLowerCase();
        const id = String(pokemon.id);
        const search = searchWord.toLowerCase();
        const result = name.includes(search) || id.includes(search);
        return result;
    });
}


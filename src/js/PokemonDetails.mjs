import { setLocalStorage } from "./utils.mjs";

// pokemonDetails.mjs
export default class PokemonDetails {
    constructor(pokemonId, dataSource) {
        this.pokemonId = pokemonId;
        this.pokemon = {};
        this.dataSource = dataSource;
    };

    async init() {
        try {
            // use our datasource to get the details for the current pokemon. findpokemonById will return a promise! use await or .then() to process it
            this.pokemon = await this.dataSource.findPokemonById(this.pokemonId);
            console.log(this.pokemon)
            this.renderPokemonDetails("main");
            document.getElementById("addToCollection")
                .addEventListener("click", this.addToCollection.bind(this));
        } catch (error) {
            console.error("Error initializing PokemonDetails:", error);
        }
    };

    addToCollection() {
        setLocalStorage("so-cart", this.pokemon);
        alertMessage(`${this.pokemon.NameWithoutBrand} added to cart!`);
    };

    renderPokemonDetails(selector) {
        console.log(pokemonDetailsTemplate(this.pokemon));
        const element = document.querySelector(selector);
        element.insertAdjacentHTML("afterBegin",
            pokemonDetailsTemplate(this.pokemon)
        )
    };
}

function pokemonDetailsTemplate(pokemon) {
    return `<div class="pokemon-card">
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" loading="lazy" alt="Image of ${pokemon.name}" class="pimage"/>
        <audio class="roar" preload="none" width="100%" height="auto" controls controlsList="nodownload noplaybackrate">
            <source src="https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${pokemon.id}.ogg" type="audio/ogg">
        </audio>
        <h1 id="pokemon-id">#${pokemon.id}</h1>
        <h1 id="pokemon-name">${pokemon.name}</h1>
        </div>`;
}
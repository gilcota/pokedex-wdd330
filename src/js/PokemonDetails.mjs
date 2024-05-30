import { setLocalStorage, alertMessage } from "./utils.mjs";

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
            // once we have the pokemon details we can render out the HTML
            this.renderPokemonDetails("main");
            // once the HTML is rendered we can add a listener to Add to Cart button
            // Notice the .bind(this). Our callback will not work if we don't include that line. Review the readings from this week on 'this' to understand why.
            document.getElementById("addToCart")
                .addEventListener("click", this.addToCart.bind(this));
        } catch (error) {
            console.error("Error initializing PokemonDetails:", error);
        }
    };

    addToCart() {
        setLocalStorage("so-cart", this.pokemon);
        alertMessage(`${this.pokemon.NameWithoutBrand} added to cart!`);

        // Animate cart (backpack) icon when item added to cart
        //document.getElementsByClassName("cart").className = "cart-fill";
        changeClass();

        //document.getElementById(".cart").className = "cart-fill";
        console.log("checa la clase")
    };


    renderPokemonDetails(selector) {
        console.log(pokemonDetailsTemplate(this.pokemon));
        const element = document.querySelector(selector);
        element.insertAdjacentHTML("afterBegin",
            pokemonDetailsTemplate(this.pokemon)

        )
    };
}

export function changeClass() {

    var element = document.querySelector("#cartId");

    element.classList.replace("cart", "cart-fill");

    //element.classList.replace("cart-fill", "cart");
};


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
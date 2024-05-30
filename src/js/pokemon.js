// import { setLocalStorage } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";
import { getParams } from "./utils.mjs";
import PokemonDetails from "./PokemonDetails.mjs";

// const dataSource = new ExternalServices();

/* function addProductToCart(product) {
  setLocalStorage("so-cart", product);
} */

// Add to cart button event handler

// async function addToCartHandler(e) {
//   try {
//     const product = await dataSource.findProductById(e.target.dataset.id);
//     //console.log(product);
//     addProductToCart(product);
//   } catch (error) {
//     //console.error("Error adding product to cart:", error);
//   }
// }

// Add listener to Add to Cart button
/* document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler); */

const pokemonId = getParams("pokemon");
const dataSourceName = new ExternalServices();
//console.log(dataSourceName);
//console.log(pokemonId);

const pokemon = new PokemonDetails(pokemonId, dataSourceName);
pokemon.init();

// changeClass function, for the animation of the bag icon
export function changeClass() {
    var element = document.querySelector("#cartId");
    element.classList.replace("cart", "cart-fill");
}

import ExternalServices from "./ExternalServices.mjs";
import PokemonListing from "./PokemonList.mjs";
import {
    loadHeaderFooter,
    getParams,
    capitalizeFirstLetter,
} from "./utils.mjs";

const dataSource = new ExternalServices();






document.querySelector(".products-title").innerHTML =
    "Top Products: " + capitalizeFirstLetter(category);
const element = document.querySelector(".product-list");
const searchForm = document.querySelector("#search-form");
const searchResult = document.querySelector("#result-search");

const listElement = new PokemonListing(
    dataSource,
    category,
    element,
    searchForm,
    searchResult,
);
listElement.init();

import ExternalServices from "./ExternalServices.mjs";
import PokemonListing from "./PokemonList.mjs";

// import {
//     loadHeaderFooter,
//     getParams,
//     capitalizeFirstLetter,
// } from "./utils.mjs";

// const category = getParams("category");

//external services object
const dataSource = new ExternalServices();
// dataSource.getData();

// document.querySelector(".products-title").innerHTML =
//     "Top Products: " + capitalizeFirstLetter(category);

const element = document.querySelector(".pokemon-list");
const searchForm = document.querySelector("#search-form");
const searchResult = document.querySelector("#result-search");

const listElement = new PokemonListing(
    dataSource,
    // category,
    element,
    searchForm,
    searchResult,
);
listElement.init();

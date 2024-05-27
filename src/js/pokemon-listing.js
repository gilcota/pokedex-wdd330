import ExternalServices from "./ExternalServices.mjs";
import PokemonListing from "./PokemonList.mjs";

// import {
//     loadHeaderFooter,
// } from "./utils.mjs";

// const category = getParams("category");

//external services object
const dataSource = new ExternalServices();

const element = document.querySelector(".pokemon-list");
const searchForm = document.querySelector("#search-form");
const searchResult = document.querySelector("#result-search");

const listElement = new PokemonListing(
  dataSource,
  element,
  searchForm,
  searchResult,
);
listElement.init();


// const lucky = document.getElementById("lucky");
// lucky.addEventListener("images", initLucky());
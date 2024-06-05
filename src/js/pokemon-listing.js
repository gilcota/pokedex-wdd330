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


//Change color related to pokédex version chosen.
document.getElementById("redVersion").onclick = function () { redVersion() };
document.getElementById("blueVersion").onclick = function () { blueVersion() };
document.getElementById("yellowVersion").onclick = function () { yellowVersion() };

function redVersion() {
  var element = document.querySelectorAll(".pokemon-card").forEach(e => e.classList.replace("pokemon-card", "pokemon-red"));
  var element = document.querySelectorAll(".pokemon-blue").forEach(e => e.classList.replace("pokemon-blue", "pokemon-red"));

  // var divider = document.querySelector(".divider-top");
  // divider.classList.replace("divider-top", "divider-top-red");

  // var divider = document.querySelector(".divider");
  // divider.classList.replace("divider", "divider-red");
}
function blueVersion() {
  var element = document.querySelectorAll(".pokemon-card").forEach(e => e.classList.replace("pokemon-card", "pokemon-blue"));
  var element = document.querySelectorAll(".pokemon-red").forEach(e => e.classList.replace("pokemon-red", "pokemon-blue"));
}
function yellowVersion() {
  var element = document.querySelectorAll(".pokemon-red").forEach(e => e.classList.replace("pokemon-red", "pokemon-card"));
  var element = document.querySelectorAll(".pokemon-blue").forEach(e => e.classList.replace("pokemon-blue", "pokemon-card"));
}
import ExternalServices from "./ExternalServices.mjs";
import PokemonListing from "./PokemonList.mjs";

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
document.getElementById("versions").onchange = function () {
  // var pokemonClass = "pokemon-card";

  if (document.getElementById("versions").value == "red") {
    redVersion();
  } else if (document.getElementById("versions").value == "blue") {
    blueVersion();
  } else if (document.getElementById("versions").value == "yellow") {
    yellowVersion();
  }
};

function redVersion() {
  if (document.querySelector(".pokemon-card")) {
    document
      .querySelectorAll(".pokemon-card")
      .forEach((e) => e.classList.replace("pokemon-card", "pokemon-red"));
    document
      .querySelectorAll(".divider")
      .forEach((e) => e.classList.replace("divider", "divider-red"));
    document.getElementById("submit").id = "submit-red";
  } else if (document.querySelector(".pokemon-blue")) {
    document
      .querySelectorAll(".pokemon-blue")
      .forEach((e) => e.classList.replace("pokemon-blue", "pokemon-red"));
    document
      .querySelectorAll(".divider-blue")
      .forEach((e) => e.classList.replace("divider-blue", "divider-red"));
    document.getElementById("submit-blue").id = "submit-red";
  }
}

function blueVersion() {
  if (document.querySelector(".pokemon-card")) {
    document
      .querySelectorAll(".pokemon-card")
      .forEach((e) => e.classList.replace("pokemon-card", "pokemon-blue"));
    document
      .querySelectorAll(".divider")
      .forEach((e) => e.classList.replace("divider", "divider-blue"));
    document.getElementById("submit").id = "submit-blue";
  } else if (document.querySelector(".pokemon-red")) {
    document
      .querySelectorAll(".pokemon-red")
      .forEach((e) => e.classList.replace("pokemon-red", "pokemon-blue"));
    document
      .querySelectorAll(".divider-red")
      .forEach((e) => e.classList.replace("divider-red", "divider-blue"));
    document.getElementById("submit-red").id = "submit-blue";
  }
}

function yellowVersion() {
  if (document.querySelector(".pokemon-red")) {
    document
      .querySelectorAll(".pokemon-red")
      .forEach((e) => e.classList.replace("pokemon-red", "pokemon-card"));
    document
      .querySelectorAll(".divider-red")
      .forEach((e) => e.classList.replace("divider-red", "divider"));
    document.getElementById("submit-red").id = "submit";
  } else if (document.querySelector(".pokemon-blue")) {
    document
      .querySelectorAll(".pokemon-blue")
      .forEach((e) => e.classList.replace("pokemon-blue", "pokemon-card"));
    document
      .querySelectorAll(".divider-blue")
      .forEach((e) => e.classList.replace("divider-blue", "divider"));
    document.getElementById("submit-blue").id = "submit";
  }
}

// import { setLocalStorage } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";
import { getParams } from "./utils.mjs";
import PokemonDetails from "./PokemonDetails.mjs";

const pokemonId = getParams("pokemon");
const dataSourceName = new ExternalServices();
const pokemon = new PokemonDetails(pokemonId, dataSourceName);
pokemon.init();

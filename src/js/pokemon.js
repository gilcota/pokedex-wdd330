const url =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png";
const cards = document.querySelector("#cards");

function fetchKantoPokemon() {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((response) => response.json())
    .then(function (allpokemon) {
      allpokemon.results.forEach(function (pokemon) {
        fetchPokemonData(pokemon);
      });
    });
}

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  //console.table(data.prophets);
  displayProphets(data.prophets); // note that we reference the prophets array of the JSON data object, not just the object
}

getProphetData();

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    // Create elements to add to the div.cards element
    let card = document.createElement("section");
    let fullName = document.createElement("h2"); // fill in the blank
    let dateBirth = document.createElement("p");
    let placeBirth = document.createElement("p");
    let portrait = document.createElement("img");

    // Build the h2 content out to show the prophet's full name
    fullName.textContent = `${prophet.name} ${prophet.lastname}`; // fill in the blank

    dateBirth.textContent = `Date of birth: ${prophet.birthdate}`;
    placeBirth.textContent = `Place of birth: ${prophet.birthplace}`;

    // Build the image portrait by setting all the relevant attributes
    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute(
      "alt",
      `Portrait of ${prophet.name} ${prophet.lastname}`,
    ); // fill in the blank
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "280");
    portrait.setAttribute("height", "362");

    // Append the section(card) with the created elements
    card.appendChild(fullName); //fill in the blank
    card.appendChild(dateBirth);
    card.appendChild(placeBirth);

    card.appendChild(portrait);

    cards.appendChild(card);
  }); // end of arrow function and forEach loop
};

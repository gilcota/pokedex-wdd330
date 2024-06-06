// 1. Selects the header / footer elements, templates, and calls renderWithTemplate() to show it dynamically. 
export async function loadHeaderFooter() {
  // Get header and footer elements from the DOM
  const headerTemplate = await loadTemplate("../partials/header.html");
  const headerElement = document.getElementById("main-header");

  const footerTemplate = await loadTemplate("../partials/footer.html");
  const footerElement = document.getElementById("main-footer");

  // Render header and footer with templates
  renderWithTemplate(headerTemplate, headerElement);
  renderWithTemplate(footerTemplate, footerElement);
}

// 2. Calls the markup template that is requested.
async function loadTemplate(path) {
  const pathresponse = await fetch(path);
  const template = await pathresponse.text();
  return template;
}

// 3. Renders the header / footer markup dynamically.
export function renderWithTemplate(template, parentElement, data, callback) {
  parentElement.insertAdjacentHTML("afterbegin", template);
  if (callback) {
    callback(data);
  }
}

// 4. Renders list of 6 pokemons
export function renderListWithTemplate(templateFn, parentElement,
  list, position = "afterbegin", clear = false) {

  const listItem = list.map(templateFn);

  if (clear) {
    parentElement.innerHTML = "";
  }

  parentElement.insertAdjacentHTML(position, listItem.join(""));
}


// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function setLocalStorage(key, newData) {
  try {
    let existingData = localStorage.getItem(key);
    existingData = existingData ? JSON.parse(existingData) : [];
    if (!Array.isArray(existingData)) {
      existingData = [existingData];
    }

    existingData.push(newData);
    localStorage.setItem(key, JSON.stringify(existingData));
  } catch (error) {
    console.error('Error in setLocalStorage:', error);
  }
}

export function getParams(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(param)
  return product;
};


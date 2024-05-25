
import { renderListWithTemplate } from "./utils.mjs";


function pokemonCardTemplate(pokemon) {


    return `<li class="product-card">
        <h2 class="card__name">${pokemon.name}</h2>
        </li>`;
}

export default class PokemonListing {

    // constructor(dataSource, category, listElement, search, searchResult) {
    constructor(dataSource, listElement, search, searchResult) {
        // this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
        this.search = search;
        this.searchResult = searchResult;
    }

    async init() {
        // const list = await this.dataSource.getData(this.category);

        console.log("list")
        // const list = await this.dataSource.findProductByIds(this.productId);
        // this.list2 = list;
        // this.renderList(list);

        const list = await this.dataSource.getData();
        this.renderList(filterListBySix(list));
    };






    renderList(list) {
        renderListWithTemplate(pokemonCardTemplate, this.listElement, list);

        // this.search.addEventListener("submit", async (event) => {
        //     event.preventDefault();
        //     const searchWord = document.getElementById("search-input").value;

        //     this.listElement.innerHTML = '';
        //     const originalList = filterListBySix(list);
        //     const newList = filterListBySearch(filterListBySix(list), searchWord);

        //     renderListWithTemplate(pokemonCardTemplate, this.listElement, newList);

        //     if (newList.length > 0) {
        //         this.searchResult.style.display = "inline-block";
        //         this.searchResult.innerHTML = newList.length + " " + (newList.length === 1 ? "result" : "results");
        //     }
        //     if (newList.length == originalList.length) {
        //         this.searchResult.style.display = "none";
        //     }

        // });
    };
}

















// <a href="../product_pages/index.html?product=${product.Id}">
// <img
//     src="${product.Images.PrimaryMedium}"
//     srcset="${product.Images.PrimaryMedium} 600w, ${product.Images.PrimaryLarge} 1000w"
//     sizes="(max-width: 600px) 1000px"
//     alt="${product.NameWithoutBrand}"
// />
// <h3 class="card__brand">${product.Brand.Name}</h3>
// <h2 class="card__name">${product.Name}</h2>
// <p class="product-card__price">$${product.FinalPrice}</p></a>




function filterListBySix(list) {
    return list.sort(function () { return 0.5 - Math.random() }).slice(0, 6);
}





function filterListBySearch(list, searchWord) {
    return list.filter(item => {
        const brandName = item.Brand.Name.toLowerCase();
        const name = item.Name.toLowerCase();
        const nameWithoutBrand = item.NameWithoutBrand.toLowerCase();
        const search = searchWord.toLowerCase();
        const result = brandName.includes(search) || name.includes(search) || nameWithoutBrand.includes(search);
        return result;
    });
}


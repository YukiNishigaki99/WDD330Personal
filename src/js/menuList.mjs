import { getData } from "./menuData.mjs";
import { renderListWithTemplate } from "./utils.mjs";

function menuCardTemplate(menu) {
    return `
        <li>
            <a href="menu_pages/index.html?menu=${menu.id}">
                <img src="${menu.image}" alt="Image of ${menu.name}">
                <h3 class="card__name">${menu.name}</h3>
                <p class="menu-card__minutes">${menu.cookTimeMinutes} min.</p>
            </a>
        </li>`;
}

export default async function menuList(selector) {
    // get the element we will insert the list into from the selector
    const el = document.querySelector(selector);
    // get the list of products
    const products = await getData();
    console.log(menu);
    // render out the menu list to the element
    renderListWithTemplate(menuCardTemplate, el, menu);
}

// export default async function menuList(selector, category) {
//     // get the element we will insert the list into from the selector
//     const el = document.querySelector(selector);
//     // get the list of products
//     const products = await getData(category);
//     console.log(menu);
//     // render out the menu list to the element
//     renderListWithTemplate(menuCardTemplate, el, menu);
// }
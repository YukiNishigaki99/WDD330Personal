import { getLocalStorage, renderListWithTemplate } from "./utils.mjs";

export default function bookmark() {
    const menuArticle = getLocalStorage("so-cart");
    const outputEl = document.querySelector(".product-list");
    renderListWithTemplate(menuArticleTemplate, outputEl, menuArticle);
}

function menuArticleTemplate(article) {
    const newArticle = `
        <li class="menu-card divider">
            <a href="#" class="menu-card__image">
                <img src="${article.image}" alt="${article.image}">
            </a>
            <a href="#">
                <h2 class="card__name">${article.name}</h2>
            </a>
            <p class="menu-card__">${article.prepTimeMinutes}</p>
            <p class="menu-card__">${article.cookTimeMinutes}</p>
            <p class="menu-card__">${article.difficulty}</p>
            <p class="menu-card__">${article.caloriesPerserving}</p>
        </li>
        `;
    return newArticle;
}
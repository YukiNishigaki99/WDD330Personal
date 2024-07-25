import {
    findMenuById
} from "./menuData.mjs";
import {
    setLocalStorage,
    getLocalStorage
} from "./utils.mjs";

let menu = {};

export default async function menuDetails(id) {
    // get the details for the current menu. findMenuById will return a promise. use await or .then() to process it.
    menu = await findMenuById(id);
    // once we have the menu details we can render out the HTML
    renderMenuDetails();
    // once the HTML is rendered we can add a listener to add to favorites button
    document.getElementById("addToFavorites").addEventListener("click", addToFavorites);
}

function addToFavorites() {
    let favoriteContents = getLocalStorage("so-cart");
    //check to see if there was anything there
    if (!favoriteContents) {
        favoriteContents = [];
    }
    // then add the current menu to the list
    favoriteContents.push(menu);
    setLocalStorage("so-cart", favoriteContents);
}

function renderMenuDetails() {
    document.querySelector("#menuName").innerText = menu.name;
    document.querySelector("#menuImage").src = menu.image;
    document.querySelector("#menuImage").alt = menu.name;
    document.querySelector("#ingredients").innerText = menu.ingredients;
    document.querySelector("#instructions").innerText = menu.instructions;
    document.querySelector("#prepTimeMinutes").innerText = menu.prepTimeMinutes;
    document.querySelector("#cookTimeMinutes").innerText = menu.cookTimeMinutes;
    document.querySelector("#difficulty").innerText = menu.difficulty;
    document.querySelector("#cuisine").innerText = menu.cuisine;
    document.querySelector("#caloriesPerServing").innerText = menu.caloriesPerServing;
    document.querySelector("#tags").innerText = menu.tags;
    document.querySelector("#userId").innerText = menu.userId;
    document.querySelector("#rating").innerText = menu.rating;
    document.querySelector("#reviewCount").innerText = menu.reviewCount;
    document.querySelector("#mealType").innerText = menu.mealType;
}
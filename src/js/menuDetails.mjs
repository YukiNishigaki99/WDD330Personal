import { findMenuById } from "./menuData.mjs";
import { setLocalStorage } from "./utils.mjs";

let menu = {};

export default async function menuDetails(menuId) {
    // get the details for the current menu. findMenuById will return a promise. use await or .then() to process it.
    menu = await findMenuById(menuId);
    // once we have the menu details we can render out the HTML
    renderMenuDetails();
    // once the HTML is rendered we can add a listener to add to favorites button
    document.getElementById("addToFavorites").addEventListener("click", addToFavorites);
}

function addToFavorites() {
    setLocalStorage("so-cart", menu);
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


    // document.querySelector("#").innerText = menu.something;
    // document.querySelector("#productName").innerText = product.Brand.Name;
    // document.querySelector("#productNameWithoutBrand").innerText =
    //     product.NameWithoutBrand;
    // document.querySelector("#productImage").src = product.Image;
    // document.querySelector("#productImage").alt = product.Name;
    // document.querySelector("#productFinalPrice").innerText = product.FinalPrice;
    // document.querySelector("#productColorName").innerText =
    //     product.Colors[0].ColorName;
    // document.querySelector("#productDescriptionHtmlSimple").innerHTML =
    //     product.DescriptionHtmlSimple;
    // document.querySelector("#addToCart").dataset.id = product.Id;
}
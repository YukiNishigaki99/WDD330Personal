// const app_id = import.meta.env.app_id;
// const app_key = import.meta.env.app_key;
// const baseURL = 'https://api.edamam.com/api/recipes/v2?app_id=' + app_id + '&app_key=' + app_key;

// https://api.edamam.com/api/recipes/v2
// https://api.edamam.com/api/nutrition-details
// const baseURL = import.meta.env.VITE_SERVER_URL;

function convertToJason(res) {
    if (res.ok) {
        return res.json();
    } else {
        throw new Error("Bad Response");
    }
}

// export async function getData() {
//     const response = await fetch(baseURL + `products/search/${category}`);
//     const data = await convertToJason(response);
//     return data.Result;
// }

export async function getData() {
    const response = await fetch('../public/json/menu.json');
    const data = await convertToJason(response);
    return data;
    // console.log(data);
}

// export function getData(category = "tents") {
//     return fetch(`../json/${category}.json`).then(convertToJason).then((data) => data);
// }

export async function findMenuById(id) {
    const menus = await getData();
    return menus.find((item) => item.Id === id);
}
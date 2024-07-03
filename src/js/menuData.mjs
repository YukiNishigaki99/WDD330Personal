function convertToJason(res) {
    if (res.ok) {
        return res.json();
    } else {
        throw new Error("Bad Response");
    }
}

export function getData() {
    return fetch(`../json/menu.json`).then(convertToJason).then((data) => data);
}

// export function getData(category = "tents") {
//     return fetch(`../json/${category}.json`).then(convertToJason).then((data) => data);
// }

export async function findMenuById(id) {
    const menus = await getData();
    return menus.find((item) => item.Id === id);
}
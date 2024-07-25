function convertToJason(res) {
    if (res.ok) {
        return res.json();
    } else {
        throw new Error("Bad Response");
    }
}

export async function getData() {
    const response = await fetch('../public/json/menu.json');
    const data = await convertToJason(response);
    return data;
}

export async function findMenuById(id) {
    const menus = await getData();
    return menus.find((item) => item.Id === id);
}
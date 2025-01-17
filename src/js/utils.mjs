// wrpper for querySelector...returns matching element
// export function qs(selector, parent = document) {
//     return parent.querySelector(selector);
// }
// or a more concise version if you are into that sort of thing:
export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}
// set a listner for both touched and click
export function setClick(selector, callback) {
    qs(selector).addEventListener("touchend", (event) => {
        event.preventDefault();
        callback();
    });
    qs(selector).addEventListener("click", callback);
}

// Returns parameters from URL
export function getParam(param) {
    const
        queryString = window.location.search,
        urlParams = new URLSearchParams(queryString),
        menu = urlParams.get(param);
    return menu;
}

export function renderListWithTemplate(
    templateFn, parentElement, list, position = "afterbegin", clear = true
) {
    if (clear) {
        parentElement.innerHTML = "";
    }
    const htmlString = list.map(templateFn);
    parentElement.insertAdjacentHTML(position, htmlString.join(""));
}

export async function renderWithTemplate(
    templateFn, parentElement, data, list, position = "afterbegin", clear = true
) {
    if (clear) {
        parentElement.innerHTML = "";
    }
    const htmlString = await templateFn(data);
    parentElement.insertAdjacentHTML(position, htmlString);
    // if (callback) {
    //     callback(data);
    // }
}

function loadTemplate(path) {
    return async function () {
        const res = await fetch(path);
        if (res.ok) {
            const html = await res.text();
            return html;
        }
    };
}

export async function loadHeaderFooter() {
    const
        headerTemplateFn = loadTemplate("../public/partials/header.html"),
        headerEl = qs("#main-header");
    renderWithTemplate(headerTemplateFn, headerEl);

    const
        footerTemplateFn = loadTemplate("../public/partials/footer.html"),
        footerEl = qs("#main-footer");
    renderWithTemplate(footerTemplateFn, footerEl);
}
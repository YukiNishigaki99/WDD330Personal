import menuList from "./menuList.mjs";
import {
    getParam,
    loadHeaderFooter
} from "./utils.mjs";

loadHeaderFooter();
const category = getParam("category");
menuList(".menu-list");
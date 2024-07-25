import {
    loadHeaderFooter,
    getParam
} from "./utils.mjs";
import menuDetails from "./menuDetails.mjs";

loadHeaderFooter()
const menuId = getParam("menu");
menuDetails(menuId);
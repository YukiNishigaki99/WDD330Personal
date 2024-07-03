import { getParam } from "./utils.mjs";
import menuDetails from "./menuDetails.mjs";

const menuId = getParam("menu");
menuDetails(menuId);
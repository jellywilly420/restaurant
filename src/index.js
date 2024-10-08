import "./styles.css";
import {renderHome} from "./home.js";
import { renderMenu } from "./menu.js";
import { renderContact } from "./contact.js";
 {renderMenu};
let tabs = {
    0: "home",
    1: "menu", 
    2: "contact",
};
let currentTab = tabs[0];
//--------------------
renderContact();
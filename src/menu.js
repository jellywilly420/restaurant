import { createElement, content} from "./DOM.js";
export {renderMenu};

function renderMenu() {
    const h2 = createElement("h2");
    h2.innerHTML = "menu";
    h2.classList.add("tab-title", "menu")
    content.appendChild(h2);
}
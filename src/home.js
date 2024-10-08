import {createElement, content} from "./DOM.js";
export {renderHome};

function renderHome() {
    const h2 = createElement("h2");
    h2.innerHTML = "home";
    h2.classList.add("tab-title", "home");
    content.appendChild(h2);
}
import {createElement, content} from "./DOM.js";
export {renderContact};

function renderContact() {
    const h2 = createElement("h2");
    h2.innerHTML = "contact";
    h2.classList.add("tab-title", "contact");
    content.appendChild(h2);
}
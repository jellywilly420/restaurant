import "./styles.css";
import {renderHome} from "./home.js";
import { renderMenu } from "./menu.js";
import { renderContact } from "./contact.js";
import { clearContent, homeButton, menuButton, contactButton, disableButton, enableButton} from "./DOM.js";

// -----------------

class Page {
    constructor(name) {
        this.name = name;
    }
    isLoaded = false;
}

// ------------------

const homePage = new Page("homePage");
const menuPage = new Page("menuPage");
const contactPage = new Page("contactPage");

const pages = [homePage, menuPage, contactPage];
const buttons = [homeButton, menuButton, contactButton];

// ------------------

function getLoadedPage(pages) {
    for (const i in pages) {
        if (pages[i].isLoaded) {
            return pages[i];
        }
    }
}

function getPageByName(pages, name) {
    return pages.find(page => page.name === name)
}

function loadPage(page) {
    page.isLoaded = true;
}

function unloadPage(page) {
    page.isLoaded = false;
}

function renderPage(page) {
    if (page === homePage) {
        renderHome();
    }
    if (page === menuPage) {
        renderMenu();
    }
    if (page === contactPage) {
        renderContact();
    }
}

// -------------------
// console.log(buttons);
for (const i in buttons) {
    buttons[i].addEventListener('click', () => {
        if (getLoadedPage(pages).name != buttons[i].id) {
            
            unloadPage(getLoadedPage(pages))
            loadPage(getPageByName(pages, buttons[i].id));
            clearContent();
            renderPage(getLoadedPage(pages));

            for (const j in buttons) {
                enableButton(buttons[j]);
            }
            disableButton(buttons[i]);
        }
    })
}

// -------------------
clearContent();
loadPage(homePage);
renderPage(homePage);
disableButton(homeButton);

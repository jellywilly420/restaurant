const content = document.body.querySelector(".content");
const homeButton = document.body.querySelector("#homePage");
const menuButton = document.body.querySelector("#menuPage");
const contactButton = document.body.querySelector("#contactPage");

function clearContent() {
    content.innerHTML = "";
}
function createElement(elem) {
    return document.createElement(elem);
}
function disableButton(button) {
    button.classList.add("disabled")
}
function enableButton(button) {
    if ([...button.classList].includes("disabled")) {
        button.classList.remove("disabled")
    }
}

export {createElement, content, clearContent, homeButton, menuButton, contactButton, disableButton, enableButton};
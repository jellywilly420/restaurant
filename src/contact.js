import {createElement, content} from "./DOM.js";
export {renderContact};

function renderContact() {
    const aboutUsDiv = createElement("div");
    aboutUsDiv.classList.add("about-us-div");
    
    const aboutUsHeader = createElement("h2");
    aboutUsHeader.classList.add("about-us-header");
    aboutUsHeader.innerText = "Who are we?";

    const aboutUsPara = createElement("p");
    aboutUsPara.classList.add("about-us-para");
    aboutUsPara.innerText = "we're a team very passionate about pancakes and everything related to them. try our stuff, it's really good.";

    aboutUsDiv.append(aboutUsHeader, aboutUsPara);

    const contactUsDiv = createElement("div");
    contactUsDiv.classList.add("contact-us-div");
    
    const contactUsHeader = createElement("h2");
    contactUsHeader.classList.add("contact-us-header");
    contactUsHeader.innerText = "contact us:";

    const contactUsList = createElement("ul");
    contactUsList.classList.add("contact-us-list");
    
    const contactUsPhone = createElement("li");
    contactUsPhone.classList.add("contact-us-phone");
    contactUsPhone.innerText = "+1 23456789";

    const contactUsEmail = createElement("li");
    contactUsEmail.classList.add("contact-us-email");
    contactUsEmail.innerText = "ouremail@email.com";

    contactUsList.append(contactUsEmail, contactUsPhone);
    contactUsDiv.append(contactUsHeader, contactUsList);

    const followUsDiv = createElement("div");
    followUsDiv.classList.add("follow-us-div");

    const followUsHeader = createElement("h2");
    followUsHeader.classList.add("follow-us-header");
    followUsHeader.innerText = "follow us:";

    const followUsList = createElement("ul");
    followUsList.classList.add("follow-us-list");
    
    // placeholder, im losing it
    followUsList.innerHTML = `<li>fb</li><li>twitter</li><li>ig</li>`;

    followUsDiv.append(followUsHeader, followUsList);

    content.append(aboutUsDiv, contactUsDiv, followUsDiv);
}
import {createElement, content} from "./DOM.js";
export {renderContact};
import facebookLogo from "./assets/facebook.svg";
import instagramLogo from "./assets/instagram.svg";
import twitterLogo from "./assets/x-twitter.svg";

function renderContact() {
    const aboutUsDiv = createElement("div");
    aboutUsDiv.classList.add("about-us-div");
    
    const aboutUsHeader = createElement("h2");
    aboutUsHeader.classList.add("about-us-header");
    aboutUsHeader.innerText = "Who Are We?";

    const aboutUsPara = createElement("p");
    aboutUsPara.classList.add("about-us-para");
    aboutUsPara.innerText = "At Stacked, we believe in the power of pancakes! Born out of a love for breakfast and an obsession with fluffy stacks, our mission is simple: to bring the best pancakes to the world, one delicious bite at a time. Whether you're into classic stacks or adventurous toppings, we’ve got something for every pancake lover. Breakfast is the most important meal of the day, so why not enjoy it all day long?";

    aboutUsDiv.append(aboutUsHeader, aboutUsPara);

    const contactUsDiv = createElement("div");
    contactUsDiv.classList.add("contact-us-div");
    
    const contactUsHeader = createElement("h2");
    contactUsHeader.classList.add("contact-us-header");
    contactUsHeader.innerText = "Contact Us";

    const contactUsPara = createElement("p");
    contactUsPara.classList.add("contact-us-para");
    contactUsPara.innerText = "Got questions or just want to say hello? We’d love to hear from you!";

    const contactUsList = createElement("ul");
    contactUsList.classList.add("contact-us-list");
    
    const contactUsPhone = createElement("li");
    contactUsPhone.classList.add("contact-us-phone");
    contactUsPhone.innerText = "Phone: (123) 456-7890";

    const contactUsEmail = createElement("li");
    contactUsEmail.classList.add("contact-us-email");
    contactUsEmail.innerText = "Email: contact@stackedpancakes.com";

    contactUsList.append(contactUsEmail, contactUsPhone);
    contactUsDiv.append(contactUsHeader, contactUsPara, contactUsList);

    const followUsDiv = createElement("div");
    followUsDiv.classList.add("follow-us-div");

    const followUsHeader = createElement("h2");
    followUsHeader.classList.add("follow-us-header");
    followUsHeader.innerText = "Follow Us";

    const followUsPara = createElement("p");
    followUsPara.classList.add("follow-us-para");
    followUsPara.innerText = "Stay in the loop with our latest specials and pancake creations. Follow us on social media!";

    const followUsList = createElement("div");
    followUsList.classList.add("follow-us-list");
    
    // placeholder, im losing it
    // followUsList.innerHTML = `<li>fb</li><li>twitter</li><li>ig</li>`;

    const facebookLink = createElement("img");
    facebookLink.classList.add("facebook-link")
    facebookLink.src = facebookLogo;
    const twitterLink = createElement("img");
    twitterLink.classList.add("twitter-link")
    twitterLink.src = twitterLogo;
    const instagramLink = createElement("img");
    instagramLink.classList.add("instagram-link")
    instagramLink.src = instagramLogo;
    
    followUsList.append(twitterLink, instagramLink, facebookLink)

    followUsDiv.append(followUsHeader, followUsPara, followUsList);


    content.append(aboutUsDiv, contactUsDiv, followUsDiv);
}
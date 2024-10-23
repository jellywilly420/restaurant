import {createElement, content} from "./DOM.js";
export {renderContact};

function renderContact() {
    const contactContainer = createElement("div");
    contactContainer.classList.add("contact-container");

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

    const facebookLink = createElement("div");
    facebookLink.classList.add("facebook-link")
    facebookLink.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M16,2c-7.732,0-14,6.268-14,14,0,6.566,4.52,12.075,10.618,13.588v-9.31h-2.887v-4.278h2.887v-1.843c0-4.765,2.156-6.974,6.835-6.974,.887,0,2.417,.174,3.043,.348v3.878c-.33-.035-.904-.052-1.617-.052-2.296,0-3.183,.87-3.183,3.13v1.513h4.573l-.786,4.278h-3.787v9.619c6.932-.837,12.304-6.74,12.304-13.897,0-7.732-6.268-14-14-14Z"></path></svg>`;
    const twitterLink = createElement("div");
    twitterLink.classList.add("twitter-link")
    twitterLink.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M18.42,14.009L27.891,3h-2.244l-8.224,9.559L10.855,3H3.28l9.932,14.455L3.28,29h2.244l8.684-10.095,6.936,10.095h7.576l-10.301-14.991h0Zm-3.074,3.573l-1.006-1.439L6.333,4.69h3.447l6.462,9.243,1.006,1.439,8.4,12.015h-3.447l-6.854-9.804h0Z"></path></svg>`;
    const instagramLink = createElement("div");
    instagramLink.classList.add("instagram-link")
    instagramLink.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M10.202,2.098c-1.49,.07-2.507,.308-3.396,.657-.92,.359-1.7,.84-2.477,1.619-.776,.779-1.254,1.56-1.61,2.481-.345,.891-.578,1.909-.644,3.4-.066,1.49-.08,1.97-.073,5.771s.024,4.278,.096,5.772c.071,1.489,.308,2.506,.657,3.396,.359,.92,.84,1.7,1.619,2.477,.779,.776,1.559,1.253,2.483,1.61,.89,.344,1.909,.579,3.399,.644,1.49,.065,1.97,.08,5.771,.073,3.801-.007,4.279-.024,5.773-.095s2.505-.309,3.395-.657c.92-.36,1.701-.84,2.477-1.62s1.254-1.561,1.609-2.483c.345-.89,.579-1.909,.644-3.398,.065-1.494,.081-1.971,.073-5.773s-.024-4.278-.095-5.771-.308-2.507-.657-3.397c-.36-.92-.84-1.7-1.619-2.477s-1.561-1.254-2.483-1.609c-.891-.345-1.909-.58-3.399-.644s-1.97-.081-5.772-.074-4.278,.024-5.771,.096m.164,25.309c-1.365-.059-2.106-.286-2.6-.476-.654-.252-1.12-.557-1.612-1.044s-.795-.955-1.05-1.608c-.192-.494-.423-1.234-.487-2.599-.069-1.475-.084-1.918-.092-5.656s.006-4.18,.071-5.656c.058-1.364,.286-2.106,.476-2.6,.252-.655,.556-1.12,1.044-1.612s.955-.795,1.608-1.05c.493-.193,1.234-.422,2.598-.487,1.476-.07,1.919-.084,5.656-.092,3.737-.008,4.181,.006,5.658,.071,1.364,.059,2.106,.285,2.599,.476,.654,.252,1.12,.555,1.612,1.044s.795,.954,1.051,1.609c.193,.492,.422,1.232,.486,2.597,.07,1.476,.086,1.919,.093,5.656,.007,3.737-.006,4.181-.071,5.656-.06,1.365-.286,2.106-.476,2.601-.252,.654-.556,1.12-1.045,1.612s-.955,.795-1.608,1.05c-.493,.192-1.234,.422-2.597,.487-1.476,.069-1.919,.084-5.657,.092s-4.18-.007-5.656-.071M21.779,8.517c.002,.928,.755,1.679,1.683,1.677s1.679-.755,1.677-1.683c-.002-.928-.755-1.679-1.683-1.677,0,0,0,0,0,0-.928,.002-1.678,.755-1.677,1.683m-12.967,7.496c.008,3.97,3.232,7.182,7.202,7.174s7.183-3.232,7.176-7.202c-.008-3.97-3.233-7.183-7.203-7.175s-7.182,3.233-7.174,7.203m2.522-.005c-.005-2.577,2.08-4.671,4.658-4.676,2.577-.005,4.671,2.08,4.676,4.658,.005,2.577-2.08,4.671-4.658,4.676-2.577,.005-4.671-2.079-4.676-4.656h0"></path></svg>`;
    
    followUsList.append(twitterLink, instagramLink, facebookLink)

    followUsDiv.append(followUsHeader, followUsPara, followUsList);

    contactContainer.append(aboutUsDiv, contactUsDiv, followUsDiv);
    content.append(contactContainer);
}
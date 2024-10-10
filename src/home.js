import {createElement, content} from "./DOM.js";
import tempImg from "./temp.jpg"
export {renderHome};

function renderHome() {

    const heroDiv = createElement("div");
    heroDiv.classList.add("hero-div");
    
    const heroImage = createElement("img");
    heroImage.classList.add("hero-image");
    heroImage.src = tempImg;

    const heroText = createElement("h2");
    heroText.classList.add("hero-text");
    heroText.innerText = "Hello! this is some temporary text. love you :3";

    heroDiv.append(heroImage, heroText);

    // -----------

    const specialDiv = createElement("div");
    specialDiv.classList.add("special-div");

    const specialHeader = createElement("h2");
    specialHeader.classList.add("special-header");
    specialHeader.innerText = "Try our very cool monthly special, the spicy wurst!";

    const specialImage = createElement("img");
    specialImage.classList.add("special-image");
    specialImage.src = tempImg;

    const specialPara = createElement("p");
    specialPara.classList.add("special-para");
    specialPara.innerText = "trust me bro, it's really freaking cool and tastes good";

    specialDiv.append(specialHeader, specialImage, specialPara);

    const reviewDiv = createElement("div");
    reviewDiv.classList.add("review-div");

    const reviewHeader = createElement("h2");
    reviewHeader.classList.add("review-header");
    reviewHeader.innerText = "look at these happy customers :)";

    const carouselDiv = createElement("div");
    carouselDiv.classList.add("carousel-div");

    // placeholder
    const carouselImage = createElement("img");
    carouselImage.classList.add("carousel");
    carouselImage.src = tempImg;

    const reviewButton = createElement("button");
    reviewButton.classList.add("review-button");
    reviewButton.innerText = "leave a review!";

    reviewDiv.append(reviewHeader, carouselDiv, carouselImage, reviewButton);

    content.append(heroDiv, specialDiv, reviewDiv);
}
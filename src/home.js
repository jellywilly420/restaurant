import {createElement, content} from "./DOM.js";
import {createCarousel} from "./carousel.js";
import heroImg from "./assets/pancakes-with-blueberries.jpg"
import specialImg from "./assets/thickcakes.jpg"
export {renderHome};

function renderHome() {

    const heroDiv = createElement("div");
    heroDiv.classList.add("hero-div");
    
    const heroImage = createElement("img");
    heroImage.classList.add("hero-image");
    heroImage.src = heroImg;

    const heroText = createElement("h2");
    heroText.classList.add("hero-text");
    heroText.innerHTML = `Welcome to <span class="title">STACKED</span>!<br>Pancakes That Stack Up to Your Cravings! <q>Serving breakfast all day, every day.</q>`;

    const heroFooter = createElement("svg");
    heroFooter.classList.add("hero-footer");

    heroDiv.append(heroImage, heroText);

    // -----------

    const specialDiv = createElement("div");
    specialDiv.classList.add("special-div");

    const specialHeader = createElement("h2");
    const monthNames = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
      ];
    const date = new Date;
    const month = date.getMonth();
    const currentMonthName = monthNames[month];
    specialHeader.classList.add("special-header");
    specialHeader.innerText = `Try out our ${currentMonthName} Special: The Thick Stack!`;

    const specialImage = createElement("img");
    specialImage.classList.add("special-image");
    specialImage.src = specialImg;

    const specialPara = createElement("p");
    specialPara.classList.add("special-para");
    specialPara.innerText = "Indulge in our ultra-thick, pastry-like pancakes, a decadent twist on the classic stack that’s crispy on the outside, fluffy on the inside, and perfect for fall!";

    specialDiv.append(specialHeader, specialImage, specialPara);

    const reviewDiv = createElement("div");
    reviewDiv.classList.add("review-div");

    const reviewHeader = createElement("h2");
    reviewHeader.classList.add("review-header");
    reviewHeader.innerText = "Hear from Our Happy Customers";

    const carouselDiv = createCarousel();

    const reviewButton = createElement("button");
    reviewButton.classList.add("review-button");
    reviewButton.innerText = "Leave a Review!";

    reviewDiv.append(reviewHeader, carouselDiv, reviewButton);

    content.append(heroDiv, specialDiv, reviewDiv);
}
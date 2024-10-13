import {createElement} from "./DOM.js";
import entroPfp from "./assets/entro-pfp.png";
import mimPfp from "./assets/mimmerz-pfp.png";
import chaoPfp from "./assets/chaotic-pfp.jpg";
import melonPfp from "./assets/melon-pfp.jpg";

export {createCarousel};

class Review {
    constructor(pfp, username, review) {
        this.pfp = pfp;
        this.username = username;
        this.review = review;
    }
}



let reviews = [new Review(entroPfp, "@augasj", "I wasn’t a huge pancake person, but Stacked changed my mind! The strawberry jam and sour cream combo was surprisingly perfect. Now, it’s my go-to order every time!"), 
    new Review(mimPfp, "@Mimmerz 🍓", "Of course I love pancakes, who doesn’t? At Stacked, the chocolate pancakes with syrup or honey are next-level delicious. I can't decide which topping is better, so I just get both!"), 
    new Review(chaoPfp, "@freeze3867", "I’m not usually big on pancakes, but the ones at Stacked with just a dusting of sugar really hit the spot. Sometimes simple is all you need!"), 
    new Review(melonPfp, "@melonwaterice", "Of course I love pancakes! And at Stacked, they serve them with real maple syrup—the only way it should be. None of that fake golden syrup nonsense here!")
];

let carouselElements = [];

function createCarousel() {
    const carouselDiv = createElement("div");
    carouselDiv.classList.add("carousel-div");

    const carouselBtns = createElement("div");
    carouselBtns.classList.add("carousel-btns");

    const prevBtn = createElement("button");
    prevBtn.classList.add("prev-btn");
    prevBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path style="fill:#232326" d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z" data-name="Left"/></svg>`;
    const nextBtn = createElement("button");
    nextBtn.classList.add("next-btn");
    nextBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path style="fill:#232326" d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right"/></svg>`;

    carouselBtns.append(prevBtn, nextBtn);
    carouselDiv.appendChild(carouselBtns);

    const carouselElems = createElement("div");
    carouselElems.classList.add("carousel-elements");
    for (const i in reviews) {
        const elem = createElement("div");
        elem.classList.add("carousel-element")
        
        const pfp = createElement("img");
        pfp.classList.add("review-pfp");
        pfp.src = reviews[i].pfp;

        const uName = createElement("p");
        uName.classList.add("review-user-name");
        uName.innerText = reviews[i].username;

        const review = createElement("q");
        review.classList.add("review-text");
        review.innerText = reviews[i].review;

        elem.append(pfp, uName, review);
        carouselElems.appendChild(elem);
        carouselElements += elem;
    }
    carouselDiv.appendChild(carouselElems);
    nextBtn.addEventListener("click", ()=>{
        if (getInViewIndex() === reviews.length - 1) {
            setInViewIndex(0);
        }
        else {
            incrementInViewIndex();
        }
    })
    
    prevBtn.addEventListener("click", ()=>{
        if (getInViewIndex() === 0) {
            setInViewIndex(reviews.length - 1);
        }
        else {
            decrementInViewIndex();
        }
    })
    return carouselDiv;
}

function getInViewIndex() {
	return parseInt(getComputedStyle(document.body).getPropertyValue("--in-view-index"));
}
function incrementInViewIndex() {
	document.documentElement.style.setProperty("--in-view-index", getInViewIndex() + 1);
}
function decrementInViewIndex() {
	document.documentElement.style.setProperty("--in-view-index", getInViewIndex() - 1);
}
function setInViewIndex(index) {
	document.documentElement.style.setProperty("--in-view-index", index);
}

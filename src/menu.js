import { createElement, content} from "./DOM.js";
import tempImg from "./temp.jpg";
export {renderMenu};

class Product {
    constructor(name, tag, about, price, image) {
        this.name = name;
        this.tag = tag;
        this.about = about;
        this.price = price;
        this.image = image;
    }
}

let productList = [
    new Product("glizzy", "glizzy", "you'll lick your little fingers after this", "$6.99", tempImg), 
    new Product("pan pizza", "pan-pizza", "finger lickin' good", "$5.49", tempImg), 
]

function renderMenu() {
    for (const i in productList) {

        const productDiv = createElement("div");
        productDiv.classList.add(`${productList[i].tag}-div`);
        if (i === 0) {
            productDiv.classList.add("special");
        }

        const productImage = createElement("img");
        productImage.classList.add("product-image");
        productImage.src = productList[i].image;

        const productTitle = createElement("h3");
        productTitle.classList.add("product-title");
        productTitle.innerText = productList[i].name;

        const productAbout = createElement("p");
        productAbout.classList.add("product-about");
        productAbout.innerText = productList[i].about;
        
        const productButton = createElement("button");
        productButton.classList.add("product-button");
        productButton.innerText = `buy now \n ${productList[i].price}`;

        productDiv.append(productImage, productTitle, productAbout, productButton);

        content.appendChild(productDiv);
    }
}
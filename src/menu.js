import { createElement, content} from "./DOM.js";
import chocolatePancake from "./assets/chocolate-pancakes.jpg";
import theTower from "./assets/high-tower-pancakes.jpg";
import strawberryPancake from "./assets/pancakes-with-strawberry-cream.jpg";
import thickPancake from "./assets/thickcakes.jpg";
import oatBananaPancake from "./assets/oat-banana-pancakes.jpg";

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
    new Product("The Thick Stack", "thick-pancakes", "These pancakes are so thick, they’re practically cakes! Fluffy, golden, and stacked high, they’ll make you rethink what a pancake should be.", "$6.99", thickPancake),
    new Product("Choco Stack", "chocolate-pancakes", "A rich, fluffy stack of pancakes smothered in melted chocolate, with a drizzle of even more chocolate on top. It's a chocoholic’s dream come true!", "$12.99", chocolatePancake), 
    new Product("The Tower", "the-tower", "A sky-high stack of fluffy pancakes, layered with butter and drenched in syrup. So tall, you might need a step stool!", "$19.99", theTower), 
    new Product("Strawberries & Dream", "strawberry-cream-pancakes", "Fluffy pancakes topped with fresh strawberries and a cloud of whipped cream, drizzled with strawberry syrup. It’s a berry delicious dream come true!", "$10.99", strawberryPancake),
    new Product("Banana Oat Stack", "banana-oat-pancakes", "Wholesome, fluffy pancakes made with oats and ripe bananas. Naturally sweet and perfect for when you want to feel good about indulging!", "$8.99", oatBananaPancake)
]

function renderMenu() {
    const menuDiv = createElement("div");
    menuDiv.classList.add("menu-div");
    content.appendChild(menuDiv);
    for (const i in productList) {

        const productDiv = createElement("div");
        productDiv.classList.add(`${productList[i].tag}-div`);
        if (i == 0) {
            productDiv.classList.add("special");
            console.log(productList[i]);
        }

        const imageContainer = createElement("div");
        imageContainer.classList.add("image-container");

        const productImage = createElement("img");
        productImage.classList.add("product-image");
        productImage.src = productList[i].image;
        imageContainer.appendChild(productImage);

        const productTitle = createElement("h3");
        productTitle.classList.add("product-title");
        productTitle.innerText = productList[i].name;

        const productAbout = createElement("p");
        productAbout.classList.add("product-about");
        productAbout.innerText = productList[i].about;
        
        const productButton = createElement("button");
        productButton.classList.add("product-button");
        productButton.innerHTML = `<span class="buy-tex">Order now</span><span class="price">${productList[i].price}</span>`;

        productDiv.append(imageContainer, productTitle, productAbout, productButton);

        menuDiv.appendChild(productDiv);
    }
}
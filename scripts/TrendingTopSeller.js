// Trending
const trendingItems = 
[
    {
        id: "menTShirts1",
        image: "images/Men/Clothing/T-Shirts/Men-TShirts-01.jpg",
        name: "Jordan Air",
        category: "Men's T-Shirt",
        price: 119
    },
    {
        id: "menJackets1",
        image: "images/Men/Clothing/Jackets/Men-Jackets-01.jpg",
        name: "Nike Windrunner",
        category: "Men's Running Jacket",
        price: 369
    },
    {
        id: "menJackets4",
        image: "images/Men/Clothing/Jackets/Men-Jackets-04.jpg",
        name: "Jordan Flight Heritage",
        category: "Men's Jacket",
        price: 725
    },
    {
        id: "menHoodies4",
        image: "images/Men/Clothing/Hoodies/Men-Hoodies-04.jpg",
        name: "Nike Tech Fleece",
        category: "Men's Pullover Graphic Hoodie",
        price: 389
    },
    {
        id: "womenTShirts6",
        image: "images/Women/Clothing/T-Shirts/Women-TShirts-06.jpg",
        name: "Jordan v3",
        category: "Women's Graphic T-Shirt",
        price: 145
    },
    {
        id: "womenHoodies6",
        image: "images/Women/Clothing/Hoodies/Women-Hoodies-06.jpg",
        name: "The North Face",
        category: "Women's Box Overhead Hoodie",
        price: 440
    },
    {
        id: "womenJackets5",
        image: "images/Women/Clothing/Jackets/Women-Jackets-05.jpg",
        name: "Napapijri",
        category: "Women's Box Padded Jacket",
        price: 959
    },
    {
        id: "womenShorts8",
        image: "images/Women/Clothing/Shorts/Women-Shorts-08.jpg",
        name: "Jordan v3",
        category: "Women's Diamond Shorts",
        price: 330
    }
];

// Top Seller
const topSellerItems = 
[
    {
        id: "womenShorts2",
        image: "images/Women/Clothing/Shorts/Women-Shorts-02.jpg",
        name: "Supply & Demand",
        category: "Women's Renton 92 Shorts",
        price: 109
    },
    {
        id: "womenShorts5",
        image: "images/Women/Clothing/Shorts/Women-Shorts-05.jpg",
        name: "adidas",
        category: "Women's Cycling Shorts",
        price: 179
    },
    {
        id: "womenJackets1",
        image: "images/Women/Clothing/Jackets/Women-Jackets-01.jpg",
        name: "Supply & Demand",
        category: "Women's Risco Woven Jacket",
        price: 189
    },
    {
        id: "womenHoodies1",
        image: "images/Women/Clothing/Hoodies/Women-Hoodies-01.jpg",
        name: "Supply & Demand",
        category: "Women's Lander Crop Hoodie",
        price: 149
    },
    {
        id: "menTShirts5",
        image: "images/Men/Clothing/T-Shirts/Men-TShirts-05.jpg",
        name: "adidas Originals",
        category: "Men's Basketball T-Shirt",
        price: 169
    },
    {
        id: "menHoodies6",
        image: "images/Men/Clothing/Hoodies/Men-Hoodies-06.jpg",
        name: "Nicce Original",
        category: "Men's Logo Hoodie",
        price: 329
    },
    {
        id: "menShorts2",
        image: "images/Men/Clothing/Shorts/Men-Shorts-02.jpg",
        name: "Jordan Flight MVP",
        category: "Men's Mesh Shorts",
        price: 179
    },
    {
        id: "menShorts8",
        image: "images/Men/Clothing/Shorts/Men-Shorts-08.jpg",
        name: "Tommy Hilfiger v2",
        category: "Men's Embroidered Shorts",
        price: 470
    }
];

// Trending 
let trendingHTML = '';

trendingItems.forEach((item) =>
{
    trendingHTML +=
    `
        <div class="product-box">
            <div class="product-img-container">
                <img class="product-img" src="${item.image}">
            </div>
            <div class="product-detail">
                <div class="product-name">${item.name}</div>
                <div class="product-category">${item.category}</div>
                <div class="product-price">RM ${item.price}</div>
            </div>
            <div class="add-to-cart-container">
                <button class="add-to-cart-button add-cart" data-product-id="${item.id}">Add to Cart</button>
            </div>
        </div>
    `;
});

document.querySelector('.trending-items-container').innerHTML = trendingHTML;

// Top-Seller
let topSellerHTML = '';

topSellerItems.forEach((item) =>
{
    topSellerHTML +=
    `
        <div class="product-box">
            <div class="product-img-container">
                <img class="product-img" src="${item.image}">
            </div>
            <div class="product-detail">
                <div class="product-name">${item.name}</div>
                <div class="product-category">${item.category}</div>
                <div class="product-price">RM ${item.price}</div>
            </div>
            <div class="add-to-cart-container">
                <button class="add-to-cart-button add-cart" data-product-id="${item.id}">Add to Cart</button>
            </div>
        </div>
    `;
});

document.querySelector('.top-seller-items-container').innerHTML = topSellerHTML;
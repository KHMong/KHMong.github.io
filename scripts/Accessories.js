// Badminton
const badminton = 
[
    {
        id: "badminton1",
        image: "images/Accessories/Badminton/Badminton-01.jpg",
        name: "Dunlop Aeroflite 12 pc",
        category: "Shuttlecocks",
        price: 33
    },
    {
        id: "badminton2",
        image: "images/Accessories/Badminton/Badminton-02.jpg",
        name: "Carlton C FS Club 12 Packs",
        category: "Shuttlecocks",
        price: 33
    },
    {
        id: "badminton3",
        image: "images/Accessories/Badminton/Badminton-03.jpg",
        name: "Yonex AS 30 Feather",
        category: "Shuttlecocks",
        price: 110
    },
    {
        id: "badminton4",
        image: "images/Accessories/Badminton/Badminton-04.jpg",
        name: "Li Ning Gold Medal",
        category: "Shuttlecocks",
        price: 99
    },
];

// Football
const football = 
[
    {
        id: "football1",
        image: "images/Accessories/Football/Football-01.jpg",
        name: "Sondico",
        category: "Football",
        price: 50
    },
    {
        id: "football2",
        image: "images/Accessories/Football/Football-02.jpg",
        name: "adidas Starlancer Club",
        category: "Football",
        price: 69
    },
    {
        id: "football3",
        image: "images/Accessories/Football/Football-03.jpg",
        name: "Puma Big Cat",
        category: "Football",
        price: 69
    },
    {
        id: "football4",
        image: "images/Accessories/Football/Football-04.jpg",
        name: "Molten 2100",
        category: "Football",
        price: 95
    },
];

// Skate
const skate = 
[
    {
        id: "skate1",
        image: "images/Accessories/Skate/Skate-01.jpg",
        name: "No Fear",
        category: "Junior Skateboard",
        price: 149
    },
    {
        id: "skate2",
        image: "images/Accessories/Skate/Skate-02.jpg",
        name: "No Fear v2",
        category: "Micro Skateboard",
        price: 99
    },
    {
        id: "skate3",
        image: "images/Accessories/Skate/Skate-03.jpg",
        name: "Slazenger",
        category: "Smash Knee Pads",
        price: 75
    },
    {
        id: "skate4",
        image: "images/Accessories/Skate/Skate-04.jpg",
        name: "LP Support",
        category: "Ankle Support",
        price: 40
    },
];

// Squash
const squash = 
[
    {
        id: "squash1",
        image: "images/Accessories/Squash/Squash-01.jpg",
        name: "Slazenger",
        category: "Prodigy Squash Racket",
        price: 119
    },
    {
        id: "squash2",
        image: "images/Accessories/Squash/Squash-02.jpg",
        name: "Dunlop",
        category: "Tempo Pro 4.0 Squash Racket",
        price: 249
    },
    {
        id: "squash3",
        image: "images/Accessories/Squash/Squash-03.jpg",
        name: "Squash Precision",
        category: "Squash String",
        price: 18
    },
    {
        id: "squash4",
        image: "images/Accessories/Squash/Squash-04.jpg",
        name: "Dunlop Competition",
        category: "Squash Balls",
        price: 69
    },
];

// Table Tennis
const tableTennis = 
[
    {
        id: "tableTennis1",
        image: "images/Accessories/Table Tennis/Table-Tennis-01.jpg",
        name: "Carlton",
        category: "Airlite Power Table Tennis Bat",
        price: 55
    },
    {
        id: "tableTennis2",
        image: "images/Accessories/Table Tennis/Table-Tennis-02.jpg",
        name: "Carlton v2",
        category: "Vapour Speed Table Tennis Bat",
        price: 105
    },
    {
        id: "tableTennis3",
        image: "images/Accessories/Table Tennis/Table-Tennis-03.jpg",
        name: "Sunflex",
        category: "Prime S10 Table Tennis Bat",
        price: 18
    },
    {
        id: "tableTennis4",
        image: "images/Accessories/Table Tennis/Table-Tennis-04.jpg",
        name: "Sunflex v2",
        category: "Dynamic A40 Table Tennis Bat",
        price: 78
    },
];

// Tennis
const tennis = 
[
    {
        id: "tennis1",
        image: "images/Accessories/Tennis/Tennis-01.jpg",
        name: "Slazenger",
        category: "Smash Tennis Racket",
        price: 159
    },
    {
        id: "tennis2",
        image: "images/Accessories/Tennis/Tennis-02.jpg",
        name: "Dunlop",
        category: "Elite 270 Tennis Racket",
        price: 329
    },
    {
        id: "tennis3",
        image: "images/Accessories/Tennis/Tennis-03.jpg",
        name: "Nike",
        category: "Swoosh Headband",
        price: 49
    },
    {
        id: "tennis4",
        image: "images/Accessories/Tennis/Tennis-04.jpg",
        name: "Nike v2",
        category: "Swoosh Headband",
        price: 49
    },
];

document.addEventListener('DOMContentLoaded', function() 
{   
    // Accessories
    let badmintonHTML = '';
    let footballHTML = '';
    let skateHTML = '';
    let squashHTML = '';
    let tableTennisHTML = '';
    let tennisHTML = '';
    

    // Badminton
    badminton.forEach((item) =>
    {
        badmintonHTML +=
        `
            <div class="product-box">
                <div class="product-img-container">
                    <img class="product-img" src="../${item.image}">
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

    // Football
    football.forEach((item) =>
    {
        footballHTML +=
        `
            <div class="product-box">
                <div class="product-img-container">
                    <img class="product-img" src="../${item.image}">
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

    // Skate
    skate.forEach((item) =>
    {
        skateHTML +=
        `
            <div class="product-box">
                <div class="product-img-container">
                    <img class="product-img" src="../${item.image}">
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

    // Squash
    squash.forEach((item) =>
    {
        squashHTML +=
        `
            <div class="product-box">
                <div class="product-img-container">
                    <img class="product-img" src="../${item.image}">
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

    // Table Tennis
    tableTennis.forEach((item) =>
    {
        tableTennisHTML +=
        `
            <div class="product-box">
                <div class="product-img-container">
                    <img class="product-img" src="../${item.image}">
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

    // Tennis
    tennis.forEach((item) =>
    {
        tennisHTML +=
        `
            <div class="product-box">
                <div class="product-img-container">
                    <img class="product-img" src="../${item.image}">
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

    // Badminton
    const badmintonContainer = document.querySelector('.badminton-container');
    if (badmintonContainer)
    {
        badmintonContainer.innerHTML = badmintonHTML;
    }

    // Football
    const footballContainer = document.querySelector('.football-container');
    if (footballContainer)
    {
        footballContainer.innerHTML = footballHTML;
    }

    // Skate
    const skateContainer = document.querySelector('.skate-container');
    if (skateContainer)
    {
        skateContainer.innerHTML = skateHTML;
    }

    // Squash
    const squashContainer = document.querySelector('.squash-container');
    if (squashContainer)
    {
        squashContainer.innerHTML = squashHTML;
    }

    // Table Tennis
    const tableTennisContainer = document.querySelector('.table-tennis-container');
    if (tableTennisContainer) 
    {
        tableTennisContainer.innerHTML = tableTennisHTML;
    }

    // Tennis
    const tennisContainer = document.querySelector('.tennis-container');
    if (tennisContainer) 
    {
        tennisContainer.innerHTML = tennisHTML;
    }

    // Accessories
    let accessoriesHTML = badmintonHTML + footballHTML + skateHTML + squashHTML + tableTennisHTML + tennisHTML;
    const accessoriesContainer = document.querySelector('.accessories-container');
    if (accessoriesContainer)
    {
        accessoriesContainer.innerHTML = accessoriesHTML;
    }
});
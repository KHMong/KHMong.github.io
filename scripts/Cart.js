// Cart
let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');

// Open cart
cartIcon.onclick = () =>
{
    cart.classList.add("active");
}

// Close cart
closeCart.onclick = () =>
{
    cart.classList.remove("active");
}

// Cart Working JS
if (document.readyState == 'loading')
{
    document.addEventListener('DOMContentLoaded', ready);
}
else
{
    ready();
}

// Making Function
function ready()
{
    // Remove items from cart
    var removeCartButtons = document.getElementsByClassName('cart-remove');
    console.log(removeCartButtons);
    for (var i = 0; i < removeCartButtons.length; i++)
    {
        var button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem);
    }

    // Quantity changes
    var quantityInputs = document.getElementsByClassName('cart-quantity');
    for (var i = 0; i < quantityInputs.length; i++)
    {
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }

    // Add to cart
    var addCart = document.getElementsByClassName('add-cart');
    for (var i = 0; i < addCart.length; i++)
    {
        var button = addCart[i];
        button.addEventListener('click', addCartClicked);
    }

    loadCartItems();

    // Pay button work
    document.getElementsByClassName('btn-pay')[0].addEventListener('click', payButtonClicked);
}

// Pay button
function payButtonClicked()
{
    alert('Your payment is successful!');
    var cartContent = document.getElementsByClassName('cart-content')[0];
    while (cartContent.hasChildNodes())
    {
        cartContent.removeChild(cartContent.firstChild);
    }
    updateTotal();
    updateCartIcon();
}

// Remove items from cart
function removeCartItem(event)
{
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
    saveCartItems();
    updateCartIcon();
}

// Quantity Changes
function quantityChanged(event)
{
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0)
    {
        input.value = 1;
    }
    updateTotal();
    saveCartItems();
    updateCartIcon();
}

// Add to cart
function addCartClicked(event)
{
    var button = event.target;
    var shopProducts = button.parentElement;
    var shoppedProducts = shopProducts.parentElement;
    var title = shoppedProducts.getElementsByClassName('product-name')[0].innerText;
    var price = shoppedProducts.getElementsByClassName('product-price')[0].innerText;
    var productImg = shoppedProducts.getElementsByClassName('product-img')[0].src;
    addProductToCart(title, price, productImg);
    updateTotal();
    saveCartItems();
}

function addProductToCart(title, price, productImg)
{
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add('cart-box');
    var cartItems = document.getElementsByClassName('cart-content')[0];
    var cartItemsNames = cartItems.getElementsByClassName('cart-product-title');
    for (var i = 0; i < cartItemsNames.length; i++)
    {
        if (cartItemsNames[i].innerText == title)
        {
            alert('You have already add this item to cart!');
            return;
        }
    }
    var cartBoxContent = 
    `
        <img src="${productImg}" class="cart-img">
        <div class="detail-box">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">${price}</div>
            <input type="number" value="1" class="cart-quantity">
        </div>
        <i class='bx bxs-trash-alt cart-remove'></i>
    `;

    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem);
    cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged);
    updateTotal();
    saveCartItems();
    updateCartIcon();
}

// Update Total
function updateTotal()
{
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var total = 0;

    for (var i = 0; i < cartBoxes.length; i++)
    {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace("RM ", ""));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }
    // If price contain some cents value
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('total-price')[0].innerText = 'RM ' + total;

    // Save total to localStorage
    localStorage.setItem('cartTotal', total);
}

// Keep item in cart when page refresh with local storage
function saveCartItems()
{
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var cartItems = [];

    for (var i = 0; i < cartBoxes.length; i++)
    {
        cartBox = cartBoxes[i];
        var titleElement = cartBox.getElementsByClassName('cart-product-title')[0];
        var priceElement = cart.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        var productImg = cartBox.getElementsByClassName('cart-img')[0].src;

        var item = 
        {
            title: titleElement.innerText,
            price: priceElement.innerText,
            quantity: quantityElement.value,
            productImg: productImg
        };
        cartItems.push(item);
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// Loads in cart
function loadCartItems()
{
    var cartItems = localStorage.getItem('cartItems');
    if (cartItems)
    {
        cartItems = JSON.parse(cartItems);
        
        for (var i = 0; i < cartItems.length; i++)
        {
            var item = cartItems[i];
            addProductToCart(item.title, item.price, item.productImg);

            var cartBoxes = document.getElementsByClassName('cart-box');
            var cartBox = cartBoxes[cartBoxes.length - 1];
            var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
            quantityElement.value = item.quantity;
        }
    }
    var cartTotal = localStorage.getItem('cartTotal');
    if (cartTotal)
    {
        document.getElementsByClassName('total-price')[0].innerText = "RM " + cartTotal;
    }
    updateCartIcon();
}

// Quantity in cart icon
function updateCartIcon()
{
    var cartBoxes = document.getElementsByClassName('cart-box');
    var quantity = 0;

    for (var i = 0; i < cartBoxes.length; i++)
    {
        var cartBox = cartBoxes[i];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        quantity += parseInt(quantityElement.value);
    }
    var cartIcon = document.querySelector('.cart-item-count');
    cartIcon.textContent = quantity.toString();
}
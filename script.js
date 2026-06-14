let cart = [];
let total = 0;

function addToCart(productName, productPrice, productImage) {
    cart.push({ productName, productPrice, productImage });
    total += productPrice;
    updateCartUI();
}

function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total');

    cartCount.textContent = cart.length;

    cartItems.innerHTML = '';
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `
            <div class="cart-item-info">
                <img src="${item.productImage}" alt="${item.productName}" width="50">
                <p>${item.productName} - $${item.productPrice}</p>
            </div>`;
        cartItems.appendChild(itemDiv);
    });

    totalPrice.textContent = total;
}

function checkout() {
    alert(`Thank you for your purchase! Your total is $${total}`);
    cart = [];
    total = 0;
    updateCartUI();
}



let cart = [];

function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    let total = 0;

    cartItems.innerHTML = '';

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(listItem);

        total += item.price;
    });

    totalElement.textContent = total.toFixed(2);
}

function placeOrder() {
    alert('Order placed! Thank you for ordering.');
    cart = [];
    updateCart();
}

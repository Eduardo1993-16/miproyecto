let cart = [];
let cartCount = 0;
let totalPrice = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    cartCount++;
    totalPrice += price;
    

    document.getElementById('cart-count').textContent = cartCount;

  
    let cartItems = document.getElementById('cart-items');
    let newItem = document.createElement('li');
    newItem.textContent = `${product} - $${price}`;
    cartItems.appendChild(newItem);

    
    document.getElementById('total-price').textContent = totalPrice;

    alert(`${product} agregado al carrito!`);
}

function toggleCart() {
    const cartPopup = document.getElementById('cart-popup');
    cartPopup.style.display = cartPopup.style.display === 'block' ? 'none' : 'block';
}

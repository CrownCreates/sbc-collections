// cart-count.js — add this to index.html and product.html
// Keeps the cart badge in the navbar always up to date

document.addEventListener('DOMContentLoaded', function () {
    const cartCountEl = document.getElementById('cart-count');
    if (cartCountEl) {
        const cart = JSON.parse(localStorage.getItem('sbc_cart')) || [];
        const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
        cartCountEl.innerText = totalItems;
    }
});
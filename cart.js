// 1. Select the elements from your HTML
const cartContainer = document.getElementById('cart-container');
const totalElement = document.getElementById('total');
const subtotalElement = document.getElementById('subtotal-display');
const checkoutBtn = document.getElementById('checkout-btn');

// 2. Load data from localStorage — use ONE consistent key: 'sbc_cart'
let cart = JSON.parse(localStorage.getItem('sbc_cart')) || [];

function renderCart() {
    if (!cartContainer) return;

    cartContainer.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="text-center py-5">
                <p class="mt-3 fs-5 text-secondary">Your bag is currently empty.</p>
                <a href="index.html" class="btn btn-outline-light rounded-pill px-4 mt-2">Go Shopping</a>
            </div>`;
        if (totalElement) totalElement.innerText = "₦0";
        if (subtotalElement) subtotalElement.innerText = "₦0";
        if (checkoutBtn) checkoutBtn.disabled = true;
        return;
    }

    cart.forEach((item, index) => {
        const priceValue = parseInt(String(item.price).replace(/[^\d]/g, '')) || 0;
        total += priceValue;

        cartContainer.innerHTML += `
            <div class="d-flex align-items-center justify-content-between border-bottom border-secondary pb-4 mb-4 text-white">
                <div class="d-flex align-items-center">
                    <img src="${item.img}" class="rounded-2" style="width: 100px; height: 130px; object-fit: cover; border: 1px solid #222;">
                    <div class="ms-4">
                        <h4 class="fw-bold mb-1 text-uppercase small">${item.name}</h4>
                        <p class="text-secondary mb-0 small">SIZE: ${item.size || 'N/A'}</p>
                        <p class="fw-bold mt-2 mb-0">₦${priceValue.toLocaleString()}</p>
                    </div>
                </div>
                <button onclick="removeItem(${index})" class="btn btn-sm text-danger border-0 opacity-75">
                    <i class="bi bi-trash3"></i>
                </button>
            </div>`;
    });

    const formattedTotal = `₦${total.toLocaleString()}`;
    if (totalElement) totalElement.innerText = formattedTotal;
    if (subtotalElement) subtotalElement.innerText = formattedTotal;
    if (checkoutBtn) checkoutBtn.disabled = false;
}

// WhatsApp Checkout
if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
        const phoneNumber = "23407030248139";
        let message = `*NEW ORDER - SENATOR BLACK COLLECTIONS*\n\n`;

        cart.forEach((item, index) => {
            const priceValue = parseInt(String(item.price).replace(/[^\d]/g, '')) || 0;
            message += `${index + 1}. ${item.name} - Size: ${item.size} (₦${priceValue.toLocaleString()})\n`;
        });

        const total = cart.reduce((sum, item) => sum + (parseInt(String(item.price).replace(/[^\d]/g, '')) || 0), 0);
        message += `\n*TOTAL: ₦${total.toLocaleString()}*\n\nIs this order available for delivery?`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    });
}

// Remove Item
window.removeItem = function(index) {
    cart.splice(index, 1);
    // FIX: was saving to 'cart', now correctly saves to 'sbc_cart'
    localStorage.setItem('sbc_cart', JSON.stringify(cart));
    renderCart();
};

document.addEventListener('DOMContentLoaded', renderCart);
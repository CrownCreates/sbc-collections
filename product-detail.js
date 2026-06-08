// ==========================================
// 1. EXTRACT URL PARAMETERS & FIND PRODUCT
// ==========================================
const params = new URLSearchParams(window.location.search);

// FIX: product.js links use ?id= so we read 'id' here (was reading 'product')
const productId = params.get('id') || params.get('product');

console.log("SBC Log: Looking for product ID:", productId);

let activeProduct = null;

if (typeof ALL_PRODUCTS !== 'undefined' && productId) {
    activeProduct = ALL_PRODUCTS.find(p => p.id === productId);

    if (activeProduct) {
        const imgElement = document.getElementById('mainProductImg');
        const nameElement = document.getElementById('productName');
        const priceElement = document.getElementById('productPrice');
        const catElement = document.getElementById('productCategory');

        if (imgElement) imgElement.src = activeProduct.img;
        if (nameElement) nameElement.innerText = activeProduct.name;
        if (priceElement) priceElement.innerText = `₦${activeProduct.price.toLocaleString()}`;
        if (catElement) catElement.innerText = activeProduct.category.toUpperCase();

        // Update page title
        document.title = `${activeProduct.name} - SBC`;

        console.log("SBC Log: Successfully loaded:", activeProduct.name);
    } else {
        console.error("SBC Error: Product not found:", productId);
    }
} else {
    console.error("SBC Error: ALL_PRODUCTS missing or no product ID in URL.");
}

// ==========================================
// 2. SIZE SELECTION
// ==========================================
let selectedSize = null;
const sizeButtons = document.querySelectorAll('.size-btn');

sizeButtons.forEach(button => {
    button.addEventListener('click', () => {
        sizeButtons.forEach(btn => {
            btn.classList.remove('btn-light', 'text-black');
            btn.classList.add('btn-outline-light');
        });

        button.classList.remove('btn-outline-light');
        button.classList.add('btn-light', 'text-black');

        selectedSize = button.innerText.trim();
        console.log("SBC Log: Size selected:", selectedSize);
    });
});

// ==========================================
// 3. ADD TO CART
// ==========================================
const addToCartBtn = document.getElementById('addToCartBtn');

if (addToCartBtn) {
    addToCartBtn.addEventListener('click', function () {
        if (!selectedSize) {
            alert("Please select a size first!");
            return;
        }

        if (!activeProduct) {
            alert("Product data could not be loaded.");
            return;
        }

        const productData = {
            id: activeProduct.id,
            name: activeProduct.name,
            price: activeProduct.price,
            img: activeProduct.img,
            size: selectedSize,
            quantity: 1
        };

        // FIX: use consistent key 'sbc_cart' everywhere
        let cart = JSON.parse(localStorage.getItem('sbc_cart')) || [];

        const existingIndex = cart.findIndex(item =>
            item.id === productData.id && item.size === productData.size
        );

        if (existingIndex > -1) {
            cart[existingIndex].quantity += 1;
        } else {
            cart.push(productData);
        }

        localStorage.setItem('sbc_cart', JSON.stringify(cart));

        // Update cart count badge
        updateCartCount();

        // Button feedback
        addToCartBtn.innerText = "ADDED TO BAG ✓";
        addToCartBtn.classList.remove('btn-light');
        addToCartBtn.classList.add('btn-success');

        setTimeout(() => {
            addToCartBtn.innerText = "ADD TO CART";
            addToCartBtn.classList.remove('btn-success');
            addToCartBtn.classList.add('btn-light');
            window.location.href = "cart.html";
        }, 1500);
    });
}

// ==========================================
// 4. UPDATE CART COUNT BADGE IN NAVBAR
// ==========================================
function updateCartCount() {
    const cartCountEl = document.getElementById('cart-count');
    if (cartCountEl) {
        const cart = JSON.parse(localStorage.getItem('sbc_cart')) || [];
        const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
        cartCountEl.innerText = totalItems;
        cartCountEl.style.display = totalItems > 0 ? 'block' : 'none';
    }
}

// Run on page load
document.addEventListener('DOMContentLoaded', updateCartCount);
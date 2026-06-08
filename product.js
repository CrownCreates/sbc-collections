document.addEventListener("DOMContentLoaded", () => {
    const catalogGrid = document.getElementById("sbcCatalogGrid");
    
    // 1. Look up at the browser address bar for a query tag (e.g., ?category=tshirts)
    const urlParameters = new URLSearchParams(window.location.search);
    const activeCategory = urlParameters.get("category");

    // 2. Filter our master warehouse list based on that tag
    // If a category tag exists, only show items matching it. Otherwise, show all 32 items!
    const productsToDisplay = activeCategory 
        ? ALL_PRODUCTS.filter(item => item.category === activeCategory)
        : ALL_PRODUCTS;

    // 3. Clear out the grid framework to prevent duplicates
    if (catalogGrid) {
        catalogGrid.innerHTML = "";

        // 4. If a category happens to be completely empty, show a fallback message
        if (productsToDisplay.length === 0) {
            catalogGrid.innerHTML = `
                <div class="col-12 text-center text-muted my-5">
                    <h3>No items found in this collection yet.</h3>
                </div>`;
            return;
        }

        // 5. Loop over the filtered items and generate premium Bootstrap cards dynamically
        catalogGrid.innerHTML = productsToDisplay.map(product => `
            <div class="col">
                <div class="card h-100 border-0 bg-transparent text-white sbc-product-card" style="transition: transform 0.2s ease;">
                    <a href="product-detail.html?id=${product.id}">
                        <img src="${product.img}" class="card-img-top rounded-0 img-fluid" alt="${product.name}" 
                             onerror="this.src='images/logo/sbc-logo.jpeg'" style="object-fit: cover; aspect-ratio: 3/4;">
                    </a>
                    <div class="card-body px-0 pt-3">
                        <h6 class="fw-bold mb-1 text-uppercase tracking-wide" style="font-size: 0.85rem; letter-spacing: 0.5px;">${product.name}</h6>
                        <p class="text-white-50 small mb-0">₦${product.price.toLocaleString()}</p>
                    </div>
                </div>
            </div>
        `).join("");
    }
});
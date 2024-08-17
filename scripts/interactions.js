// scripts/interactions.js

export function createProductCard(product) {
    return `
        <div class="product-card" data-category="${product.category}">
            <img src="${product.image}" alt="${product.name}">
            <div class="info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
            </div>
        </div>
    `;
}

export function createPortfolioCard(profile) {
    return `
        <div class="portfolio-card" data-role="${profile.role}">
            <img src="${profile.image}" alt="${profile.name}">
            <div class="info">
                <h3>${profile.name}</h3>
                <p>${profile.skills}</p>
            </div>
        </div>
    `;
}

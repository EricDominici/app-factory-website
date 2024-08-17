// scripts/interactions.js

export function createProductCard(product) {
    return `
        <div class="product-card" data-name="${product.name}">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
        </div>
    `;
}

export function createPortfolioCard(profile) {
    return `
        <div class="portfolio-card" data-name="${profile.name}">
            <img src="${profile.image}" alt="${profile.name}">
            <h3>${profile.name}</h3>
            <p>${profile.skills}</p>
        </div>
    `;
}

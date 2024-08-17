export function createProductCard(product) {
    return `
        <div class="product-card" data-name="${product.name}">
            <img src="${product.image}" alt="${product.name}">
            <div class="card-content">
                <h3 class="card-title">${product.name}</h3>
                <p class="card-description">${product.description}</p>
            </div>
        </div>
    `;
}

export function createPortfolioCard(profile) {
    return `
        <div class="portfolio-card" data-name="${profile.name}">
            <img src="${profile.image}" alt="${profile.name}">
            <div class="card-content">
                <h3 class="card-title">${profile.name}</h3>
                <p class="card-description">${profile.skills}</p>
            </div>
        </div>
    `;
}

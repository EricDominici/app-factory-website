// scripts/main.js

import { createProductCard, createPortfolioCard } from './interactions.js';

// Example data
const products = [
    {
        name: "Product 1",
        description: "Description for Product 1",
        image: "images/product1.jpeg",
        category: "category1"
    },
    {
        name: "Product 2",
        description: "Description for Product 2",
        image: "images/product2.jpg",
        category: "category2"
    }
];

const profiles = [
    {
        name: "Juan Pérez",
        skills: "Full Stack Developer",
        image: "images/profile1.webp",
        role: "developer"
    },
    {
        name: "Ana García",
        skills: "UI/UX Designer",
        image: "images/profile2.jpeg",
        role: "designer"
    }
];

// Inject product cards into the product grid
const productGrid = document.querySelector('.product-grid');
const portfolioGrid = document.querySelector('.portfolio-grid');

// Function to render products
function renderProducts() {
    productGrid.innerHTML = products.map(product => createProductCard(product)).join('');
}

// Function to render profiles
function renderProfiles() {
    portfolioGrid.innerHTML = profiles.map(profile => createPortfolioCard(profile)).join('');
}

// Initial rendering
renderProducts();
renderProfiles();

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
});

// Dark mode functionality
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
}

// Check for saved dark mode preference
window.addEventListener('load', () => {
    if (localStorage.getItem('dark-mode') === 'true') {
        document.body.classList.add('dark-mode');
    }
});

// Add event listener to the dark mode toggle button
document.getElementById('toggle-dark-mode').addEventListener('click', toggleDarkMode);

// Add product functionality
document.getElementById('add-product-btn').addEventListener('click', () => {
    const name = prompt('Enter product name:');
    const description = prompt('Enter product description:');
    const image = prompt('Enter product image URL:');
    const category = prompt('Enter product category:');

    if (name && description && image && category) {
        products.push({ name, description, image, category });
        renderProducts();
    }
});

// Add profile functionality
document.getElementById('add-profile-btn').addEventListener('click', () => {
    const name = prompt('Enter profile name:');
    const skills = prompt('Enter profile skills:');
    const image = prompt('Enter profile image URL:');
    const role = prompt('Enter profile role:');

    if (name && skills && image && role) {
        profiles.push({ name, skills, image, role });
        renderProfiles();
    }
});

// Search and filter functionality for products
document.getElementById('search-bar').addEventListener('input', filterProducts);
document.getElementById('filter-select').addEventListener('change', filterProducts);

function filterProducts() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    const selectedCategory = document.getElementById('filter-select').value;

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm);
        const matchesCategory = selectedCategory === '' || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    productGrid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
}

// Search and filter functionality for profiles
document.getElementById('search-bar-portfolio').addEventListener('input', filterProfiles);
document.getElementById('filter-select-portfolio').addEventListener('change', filterProfiles);

function filterProfiles() {
    const searchTerm = document.getElementById('search-bar-portfolio').value.toLowerCase();
    const selectedRole = document.getElementById('filter-select-portfolio').value;

    const filteredProfiles = profiles.filter(profile => {
        const matchesSearch = profile.name.toLowerCase().includes(searchTerm);
        const matchesRole = selectedRole === '' || profile.role === selectedRole;
        return matchesSearch && matchesRole;
    });

    portfolioGrid.innerHTML = filteredProfiles.map(profile => createPortfolioCard(profile)).join('');
}


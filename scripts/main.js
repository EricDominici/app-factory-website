// scripts/main.js

import { createProductCard, createPortfolioCard } from './interactions.js';

const products = [
    {
        name: "Product 1",
        description: "Description for Product 1",
        image: "images/product1.jpeg"
    },
    {
        name: "Product 2",
        description: "Description for Product 2",
        image: "images/product2.jpg"
    }
];

const profiles = [
    {
        name: "Juan Pérez",
        skills: "Full Stack Developer",
        image: "images/profile1.webp"
    },
    {
        name: "Ana García",
        skills: "UI/UX Designer",
        image: "images/profile2.jpeg"
    }
];

function openModal(content) {
    const modal = document.getElementById('details-modal');
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = content;
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('details-modal').style.display = 'none';
}

function openAddModal(type) {
    const addModal = document.getElementById('add-modal');
    const productForm = document.getElementById('add-product-form');
    const profileForm = document.getElementById('add-profile-form');
    
    productForm.style.display = type === 'product' ? 'block' : 'none';
    profileForm.style.display = type === 'profile' ? 'block' : 'none';
    
    addModal.style.display = 'flex';
}

function closeAddModal() {
    document.getElementById('add-modal').style.display = 'none';
}

const productGrid = document.querySelector('.product-grid');
products.forEach(product => {
    productGrid.innerHTML += createProductCard(product);
});

const portfolioGrid = document.querySelector('.portfolio-grid');
profiles.forEach(profile => {
    portfolioGrid.innerHTML += createPortfolioCard(profile);
});

productGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.product-card');
    if (card) {
        const productName = card.dataset.name;
        const product = products.find(p => p.name === productName);
        openModal(`
            <h2>${product.name}</h2>
            <img src="${product.image}" alt="${product.name}">
            <p>${product.description}</p>
        `);
    }
});

portfolioGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.portfolio-card');
    if (card) {
        const profileName = card.dataset.name;
        const profile = profiles.find(p => p.name === profileName);
        openModal(`
            <h2>${profile.name}</h2>
            <img src="${profile.image}" alt="${profile.name}">
            <p>${profile.skills}</p>
        `);
    }
});

document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
});

document.getElementById('toggle-dark-mode').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

document.getElementById('add-product-btn').addEventListener('click', () => {
    openAddModal('product');
});

document.getElementById('add-profile-btn').addEventListener('click', () => {
    openAddModal('profile');
});

document.getElementById('add-product-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('product-name').value;
    const description = document.getElementById('product-description').value;
    const image = document.getElementById('product-image').value;
    products.push({ name, description, image });
    productGrid.innerHTML += createProductCard({ name, description, image });
    closeAddModal();
});

document.getElementById('add-profile-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('profile-name').value;
    const skills = document.getElementById('profile-skills').value;
    const image = document.getElementById('profile-image').value;
    profiles.push({ name, skills, image });
    portfolioGrid.innerHTML += createPortfolioCard({ name, skills, image });
    closeAddModal();
});

document.querySelector('.modal').addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        closeModal();
    }
});

document.querySelector('.close-btn').addEventListener('click', closeModal);

document.getElementById('close-add-modal').addEventListener('click', closeAddModal);

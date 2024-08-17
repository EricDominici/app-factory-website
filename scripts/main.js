import { createProductCard, createPortfolioCard } from './interactions.js';

// Example data
const products = [
    // Initial products
];

const profiles = [
    // Initial profiles
];

// Utility function to open modals
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

// Utility function to close modals
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Handle form submissions
document.getElementById('add-product-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('product-name').value;
    const description = document.getElementById('product-description').value;
    const image = document.getElementById('product-image').value;
    
    const newProduct = { name, description, image };
    products.push(newProduct);
    document.querySelector('.product-grid').innerHTML += createProductCard(newProduct);
    closeModal('add-product-modal');
});

document.getElementById('add-profile-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('profile-name').value;
    const skills = document.getElementById('profile-skills').value;
    const image = document.getElementById('profile-image').value;
    
    const newProfile = { name, skills, image };
    profiles.push(newProfile);
    document.querySelector('.portfolio-grid').innerHTML += createPortfolioCard(newProfile);
    closeModal('add-profile-modal');
});

// Event listeners for modals
document.getElementById('add-product-btn').addEventListener('click', () => openModal('add-product-modal'));
document.getElementById('add-profile-btn').addEventListener('click', () => openModal('add-profile-modal'));

document.getElementById('close-add-product-modal').addEventListener('click', () => closeModal('add-product-modal'));
document.getElementById('close-add-profile-modal').addEventListener('click', () => closeModal('add-profile-modal'));

// Show details modal
const showDetails = (data) => {
    const modal = document.getElementById('details-modal');
    const detailsContainer = document.getElementById('details-container');
    const { name, description, skills, image } = data;
    
    detailsContainer.innerHTML = `
        <h3>${name}</h3>
        ${description ? `<p>${description}</p>` : ''}
        ${skills ? `<p><strong>Skills:</strong> ${skills}</p>` : ''}
        ${image ? `<img src="${image}" alt="${name}" class="modal-image" />` : ''}
    `;
    
    modal.style.display = 'flex';
};

// Close details modal
document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('details-modal').style.display = 'none';
});

// Add click event listeners to cards
document.addEventListener('click', (e) => {
    if (e.target.closest('.product-card')) {
        const productName = e.target.closest('.product-card').querySelector('.card-title').textContent;
        const product = products.find(p => p.name === productName);
        showDetails(product);
    }
    if (e.target.closest('.portfolio-card')) {
        const profileName = e.target.closest('.portfolio-card').querySelector('.card-title').textContent;
        const profile = profiles.find(p => p.name === profileName);
        showDetails(profile);
    }
});

// Dark Mode Toggle
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
};

// Apply stored theme on page load
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }
});

// Add event listener for dark mode toggle button
document.getElementById('toggle-dark-mode').addEventListener('click', toggleDarkMode);

// Liste des produits (sera remplacée par la base de données dans la phase 2)
const products = [
    { id: 'agenda', name: 'Agenda', price: 30 },
    { id: 'dossier', name: 'Dossier Patient', price: 50 },
    { id: 'facturation', name: 'Facturation', price: 40 },
];

// Éléments du DOM
const productsList = document.getElementById('productsList');
const numDoctorsInput = document.getElementById('numDoctors');
const resultsDiv = document.getElementById('results');
const basePriceSpan = document.getElementById('basePrice');
const discountSpan = document.getElementById('discount');
const finalPriceSpan = document.getElementById('finalPrice');

// Afficher les produits
function displayProducts() {
    productsList.innerHTML = products.map(product => `
        <div class="product-checkbox">
            <input type="checkbox" id="${product.id}" name="products" value="${product.id}">
            <label for="${product.id}">${product.name}</label>
            <span class="price">${product.price}€/mois</span>
        </div>
    `).join('');
}

// Calculer le prix
function calculatePrice() {
    const selectedProducts = Array.from(document.querySelectorAll('input[name="products"]:checked'))
        .map(checkbox => products.find(p => p.id === checkbox.value));
    
    const numDoctors = parseInt(numDoctorsInput.value) || 1;
    
    const basePrice = selectedProducts.reduce((sum, product) => sum + product.price, 0) * numDoctors;
    
    // Règles de discount simples (à améliorer dans la phase 2)
    let discount = 0;
    if (selectedProducts.length > 2) discount += 10; // 10% si plus de 2 produits
    if (numDoctors > 3) discount += 15; // 15% si plus de 3 médecins
    
    const discountAmount = (basePrice * discount) / 100;
    const finalPrice = basePrice - discountAmount;
    
    // Afficher les résultats
    basePriceSpan.textContent = `${basePrice}€`;
    discountSpan.textContent = `${discountAmount}€ (${discount}%)`;
    finalPriceSpan.textContent = `${finalPrice}€`;
    resultsDiv.classList.remove('hidden');
}

// Écouteurs d'événements
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    
    // Mettre à jour le prix à chaque changement
    document.querySelectorAll('input[name="products"]').forEach(input => {
        input.addEventListener('change', calculatePrice);
    });
    
    numDoctorsInput.addEventListener('input', calculatePrice);
}); 
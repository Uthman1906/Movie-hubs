const productGrid = document.querySelector('.product-grid');

const products = [
    {
        name: 'Strawberry Yogurt',
        image: 'https://images.unsplash.com/photo-1554118865-0c490f362a4a',
    },
    {
        name: 'Blueberry Yogurt',
        image: 'https://images.unsplash.com/photo-1554118865-0c490f362a4a',
    },
    {
        name: 'Raspberry Yogurt',
        image: 'https://images.unsplash.com/photo-1554118865-0c490f362a4a',
    },
    {
        name: 'Mango Yogurt',
        image: 'https://images.unsplash.com/photo-1554118865-0c490f362a4a',
    },
];

function displayProducts() {
    productGrid.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
        `;
        productGrid.appendChild(productCard);
    });
}

displayProducts();

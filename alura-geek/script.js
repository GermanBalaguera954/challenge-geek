// script.js
document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
    const addProductForm = document.getElementById('add-product-form');

    const products = [
        { name: 'Stormtrooper', price: 60.00, image: '/img/stormtrooper.png' },
        { name: 'Game Boy Classic', price: 60.00, image: '/img/gameboy.png' }
    ];

    function renderProducts() {
        productList.innerHTML = '';
        products.forEach((product, index) => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');
            productItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
                <button class="delete-button" data-index="${index}">🗑️</button>
            `;
            productList.appendChild(productItem);
        });

        document.querySelectorAll('.delete-button').forEach(button => {
            button.addEventListener('click', (e) => {
                const index = e.target.getAttribute('data-index');
                products.splice(index, 1);
                renderProducts();
            });
        });
    }

    addProductForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const price = parseFloat(document.getElementById('price').value);
        const image = document.getElementById('image').value;

        const newProduct = { name, price, image };
        products.push(newProduct);
        renderProducts();
        addProductForm.reset();
    });

    renderProducts();
});

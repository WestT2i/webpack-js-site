const productsMenuBtn = document.querySelector('.products-menu-btn');
const clientsMenuBtn = document.querySelector('.clients-menu-btn');
const ordersMenuBtn = document.querySelector('.orders-menu-btn');

const products = document.querySelector('.products');
const clients = document.querySelector('.clients');
const orders = document.querySelector('.orders');

productsMenuBtn.addEventListener('click', () => {
    products.style.display = "block"
    clients.style.display = "none"
    orders.style.display = "none"
});

clientsMenuBtn.addEventListener('click', () => {
    products.style.display = "none"
    clients.style.display = "block"
    orders.style.display = "none"
});

ordersMenuBtn.addEventListener('click', () => {
    products.style.display = "none"
    clients.style.display = "none"
    orders.style.display = "block"
});
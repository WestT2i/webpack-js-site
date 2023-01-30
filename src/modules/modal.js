const addProduct = document.getElementById('add-product');
const addClient = document.getElementById('add-client');
const addOrder = document.getElementById('add-order');

const modalProduct = document.querySelector('.modal-product');
const modalClient = document.querySelector('.modal-client');
const modalOrder = document.querySelector('.modal-order');

const closeProduct = document.getElementById('close-product');
const closeClient = document.getElementById('close-client');
const closeOrder = document.getElementById('close-order');

addProduct.addEventListener('click', () => {
    modalProduct.classList.add('open')
});

closeProduct.addEventListener('click', () => {
    modalProduct.classList.remove('open')
});

addClient.addEventListener('click', () => {
    modalClient.classList.add('open')
});

closeClient.addEventListener('click', () => {
    modalClient.classList.remove('open')
});

addOrder.addEventListener('click', () => {
    modalOrder.classList.add('open')
});

closeOrder.addEventListener('click', () => {
    modalOrder.classList.remove('open')
});
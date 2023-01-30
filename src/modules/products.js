import addOrderList from './orders';

const addProductName = document.getElementById('add-product-name');
const addProductPrice = document.getElementById('add-product-price');
const addProductBtn = document.getElementById('add-product-btn');

const productsList = document.getElementById('products-list');

let productsArr = [];

showProducts();

addProductBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (addProductName.value != 0 && addProductPrice.value != 0) {
        addProduct();
        productsList.replaceChildren();
        showProducts();
        addProductName.value = '';
        addProductPrice.value = '';
        document.querySelector('.modal-product').classList.remove('open');
        document.getElementById('select-order-name').replaceChildren();
        document.getElementById('select-order-product').replaceChildren();
        addOrderList();
    }
});

function addProduct() {
    let productArr = JSON.parse(localStorage.getItem('products')) || [];
    const name = addProductName.value;
    const price = addProductPrice.value;
    const product = {
        name,
        price
    }
    productArr.push(product);
    localStorage.setItem('products', JSON.stringify(productArr));
};

function showProducts() {
    let productsArr = JSON.parse(localStorage.getItem('products'));

    if (productsArr != null) {
        productsArr.forEach((item, index) => {
            const product = document.createElement("div");
            product.classList.add("product");

            const productInfo = document.createElement("div");
            productInfo.classList.add("product-info");

            const productName = document.createElement("h3");
            productName.classList.add("product-name");
            productName.value = item;
            productName.innerHTML = item.name;

            const productPrice = document.createElement("p");
            productPrice.classList.add("product-price");
            productPrice.value = item;
            productPrice.innerHTML = item.price + ' ₽';

            const productDelete = document.createElement("button");
            productDelete.type = "button";
            productDelete.classList.add("product-delete-btn");
            productDelete.textContent = "Удалить";
            productDelete.addEventListener("click", () => {
                productDeleteFn(index);
            });

            productsList.append(product);
            product.append(productInfo);
            productInfo.append(productName);
            productInfo.append(productPrice);
            product.append(productDelete);
        });
    };
};

function productDeleteFn(index) {
    let productsArr = JSON.parse(localStorage.getItem('products'));
    productsArr.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(productsArr));
    productsList.replaceChildren();
    showProducts();
};
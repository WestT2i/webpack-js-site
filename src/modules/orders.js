const orderName = document.getElementById('select-order-name');
const orderProduct = document.getElementById('select-order-product');
const orderAmount = document.getElementById('input-order-amount');

const nextOrderBtn = document.getElementById('next-order-btn');
const addOrderBtn = document.getElementById('add-order-btn');

const ordersList = document.getElementById('orders-list');

let ordersArr = [];

showOrders();

function addOrderList() {
    let productsArr = JSON.parse(localStorage.getItem('products'));
    let clientsArr = JSON.parse(localStorage.getItem('clients'));

    if (productsArr != null) {
        productsArr.forEach((item, index) => {
            const productName = document.createElement("option");
            productName.value = item.name;
            productName.innerHTML = item.name;
            orderProduct.append(productName);
        });
    };

    if (clientsArr != null) {
        clientsArr.forEach((item, index) => {
            const clientName = document.createElement("option");
            clientName.value = item.name;
            clientName.innerHTML = item.name;
            orderName.append(clientName);
        });
    };

    addOrderBtn.addEventListener('click', () => {
        if (orderName.value != null && orderProduct.value != null && orderAmount.value != 0) {
            addOrder();
            ordersList.replaceChildren();
            showOrders();
            orderAmount.value = '';
            document.querySelector('.modal-order').classList.remove('open');
        }
    });
};

addOrderList();

function addOrder() {
    let ordersArr = JSON.parse(localStorage.getItem('orders')) || [];
    const client = orderName.value;
    const product = orderProduct.value;
    const amount = orderAmount.value

    const order = {
        client,
        product,
        amount
    }
    ordersArr.push(order);
    localStorage.setItem('orders', JSON.stringify(ordersArr));
};

function showOrders() {
    let ordersArr = JSON.parse(localStorage.getItem('orders'));

    if (ordersArr != null) {
        ordersArr.forEach((item, index) => {
            const order = document.createElement("div");
            order.classList.add("order");

            const orderInfo = document.createElement("div");
            orderInfo.classList.add("order-info");

            const orderClient = document.createElement("h3");
            orderClient.classList.add("order-name");
            orderClient.value = item;
            orderClient.innerHTML = item.client;

            const orderProduct = document.createElement("p");
            orderProduct.classList.add("order-product");
            orderProduct.value = item;
            orderProduct.innerHTML = item.product + ' ' + item.amount + ' шт.';;

            const orderDelete = document.createElement("button");
            orderDelete.type = "button";
            orderDelete.classList.add("order-delete-btn");
            orderDelete.textContent = "Удалить";
            orderDelete.addEventListener("click", () => {
                orderDeleteFn(index);
            });

            ordersList.append(order);
            order.append(orderInfo);
            orderInfo.append(orderClient);
            orderInfo.append(orderProduct);
            order.append(orderDelete);
        });
    };
};

function orderDeleteFn(index) {
    let ordersArr = JSON.parse(localStorage.getItem('orders'));
    ordersArr.splice(index, 1);
    localStorage.setItem('orders', JSON.stringify(ordersArr));
    ordersList.replaceChildren();
    showOrders();
    orderName.replaceChildren();
    orderProduct.replaceChildren();
    addOrderList();
};

nextOrderBtn.addEventListener('click', () => {
    orderProduct.style.display = "block";
    orderAmount.style.display = "block";
    addOrderBtn.style.display = "block";
    nextOrderBtn.style.display = "none";
});

export default addOrderList;
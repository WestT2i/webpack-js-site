import addOrderList from './orders';

const addClientName = document.getElementById('add-client-name');
const addClientNumber = document.getElementById('add-client-number');
const addClientBtn = document.getElementById('add-client-btn');

const clientsList = document.getElementById('clients-list');

let clientsArr = [];

showClients();

addClientBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (addClientName.value != 0 && addClientNumber.value != 0) {
        addClient();
        clientsList.replaceChildren();
        showClients();
        addClientName.value = '';
        addClientNumber.value = '';
        document.querySelector('.modal-client').classList.remove('open')
        document.getElementById('select-order-name').replaceChildren();
        document.getElementById('select-order-product').replaceChildren();
        addOrderList();
    }
});

function addClient() {
    let clientsArr = JSON.parse(localStorage.getItem('clients')) || [];
    const name = addClientName.value;
    const number = addClientNumber.value;
    const client = {
        name,
        number
    }
    clientsArr.push(client);
    localStorage.setItem('clients', JSON.stringify(clientsArr));
};

function showClients() {
    let clientsArr = JSON.parse(localStorage.getItem('clients'));

    if (clientsArr != null) {
        clientsArr.forEach((item, index) => {
            const client = document.createElement("div");
            client.classList.add("client");

            const clientInfo = document.createElement("div");
            clientInfo.classList.add("client-info");

            const clientName = document.createElement("h3");
            clientName.classList.add("client-name");
            clientName.value = item;
            clientName.innerHTML = item.name;

            const clientNumber = document.createElement("p");
            clientNumber.classList.add("client-number");
            clientNumber.value = item;
            clientNumber.innerHTML = item.number;

            const clientDelete = document.createElement("button");
            clientDelete.type = "button";
            clientDelete.classList.add("client-delete-btn");
            clientDelete.textContent = "Удалить";
            clientDelete.addEventListener("click", () => {
                clientDeleteFn(index);
            });

            clientsList.append(client);
            client.append(clientInfo);
            clientInfo.append(clientName);
            clientInfo.append(clientNumber);
            client.append(clientDelete);
        });
    };
};

function clientDeleteFn(index) {
    let clientsArr = JSON.parse(localStorage.getItem('clients'));
    clientsArr.splice(index, 1);
    localStorage.setItem('clients', JSON.stringify(clientsArr));
    clientsList.replaceChildren();
    showClients();
};
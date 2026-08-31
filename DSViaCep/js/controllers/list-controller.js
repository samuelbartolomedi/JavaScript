function State() {
    this.listSection = null;
}

const state = new State();

export function init() {
    state.listSection = document.querySelector("#list-section");
}

export function addCard(address) {
    if (!state.listSection) return;

    const card = createCard(address);
    state.listSection.appendChild(card);
}


function createCard(address) {
    const card = document.createElement("div");
    card.classList.add("card-list-item");

    const h3 = document.createElement("h3");
    h3.innerHTML = address.city;

    const addressInfo = document.createElement("p");
    addressInfo.classList.add("address-line");
    addressInfo.innerHTML = `${address.street}, ${address.number}`;

    const postalCode = document.createElement("p");
    postalCode.classList.add("address-postal-code");
    postalCode.innerHTML = address.postalCode;

    card.appendChild(h3);
    card.appendChild(addressInfo);
    card.appendChild(postalCode);

    return card;
}

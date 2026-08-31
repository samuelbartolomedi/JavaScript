import * as modalController from './modal-controller.js'

export function init() {
    const contactInfo = document.querySelector(".contact-info");
    contactInfo.addEventListener("click", handlerContactInfoClick);
}

function handlerContactInfoClick(event) {
    event.preventDefault();
    modalController.showModal();
}
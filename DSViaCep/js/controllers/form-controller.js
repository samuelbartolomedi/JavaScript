import Address from "../models/address.js";
import * as addressService from "../services/address-service.js";

function State() {
    this.address = new Address();

    this.btnSave = null;
    this.btnClear = null;

    this.postalCode = null;
    this.street = null;
    this.number = null;
    this.city = null;

    this.errorPostalCode = null;
    this.errorNumber = null;
}

const state = new State();

export function init() {
    state.inputPostalCode = document.forms.newAddress.postalCode;
    state.inputStreet = document.forms.newAddress.street;
    state.inputNumber = document.forms.newAddress.number;
    state.inputCity = document.forms.newAddress.city;

    state.btnSave = document.forms.newAddress.btnSave;
    state.btnClear = document.forms.newAddress.btnClear;

    state.errorPostalCode = document.querySelector("[data-error='postalCode']");
    state.errorNumber = document.querySelector("[data-error='number']");

    state.inputNumber.addEventListener("change", handlerInputNumberChange);
    state.btnClear.addEventListener("click", handlerBtnClearClick);
    state.btnSave.addEventListener("click", handlerBtnSaveClick);
    state.inputPostalCode.addEventListener("change", handlerInputCepChange);

    console.log(state);
}

function handlerInputNumberChange(event) {
    if (event.target.value == "") {
        setFormError("number", "This field is required");
    }
    else {
        state.address.number = event.target.value;
    }
}

function handlerBtnClearClick(event) {
    event.preventDefault();
    clearForm();
}

async function handlerBtnSaveClick(event) {
    event.preventDefault();

    console.log("clicou no botão salvar amigo");

    console.log(state.address);
}

function clearForm() {
    state.inputPostalCode.value = "";
    state.inputStreet.value = "";
    state.inputNumber.value = "";
    state.inputCity.value = "";

    setFormError("postalCode", "");
    setFormError("number", "");

    state.inputPostalCode.focus();
}

export function setFormError(key, value) {
    const element = document.querySelector(`[data-error='${key}']`);
    element.innerHTML = value;
}

async function handlerInputCepChange(event) {
    const postalCode = event.target.value;

    try {
        const address = await addressService.findAddressByPostalCode(postalCode);

        state.inputStreet.value = address.street;
        state.inputCity.value = address.city;
        state.address = address;

        setFormError("postalCode", "");

        console.log(address);
    } catch (error) {
        state.inputStreet.value = "";
        state.inputCity.value = "";

        setFormError("postalCode", "Please, enter a valid postal code");
    }
}
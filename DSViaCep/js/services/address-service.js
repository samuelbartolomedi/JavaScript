import * as requestService from './request-service.js';
import Address from '../models/address.js';

export async function findAddressByPostalCode(postalCode) {
    const url = `https://viacep.com.br/ws/${postalCode}/json/`;
    const jsonBody = await requestService.getJson(url);
    return new Address(jsonBody);
}

export function validateData(address) {
    const errors = {};

    if (!address.postalCode ||
        address.postalCode === "") {
        errors.postalCode = "This field is required";
    }

    if (!address.number ||
        address.number === "") {
        errors.number = "This field is required";
    }

    return errors;
}
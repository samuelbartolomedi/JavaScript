import * as requestService from './request-service.js';
import Address from '../models/address.js';

export async function findAddressByPostalCode(postalCode) {
    const url = `https://viacep.com.br/ws/${postalCode}/json/`;
    const jsonBody = await requestService.getJson(url);
    return new Address(jsonBody);
}
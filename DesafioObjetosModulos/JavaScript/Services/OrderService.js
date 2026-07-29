import * as shippingService from './ShippingService.js';

export function calculateTotal(order) {
    const shippingCost = shippingService.calculateShippingCost(order);

    const discount = order.value * (order.discount / 100);

    const total = order.value - discount + shippingCost;
    return total.toFixed(2);
}
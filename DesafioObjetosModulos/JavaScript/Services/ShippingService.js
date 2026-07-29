export function calculateShippingCost(order) {
    if (order.value < 100) {
        return 20;
    }

    if (order.value >= 100 && order.value < 200) {
        return 12;
    }

    if (order.value > 200) {
        return 0;
    }
}
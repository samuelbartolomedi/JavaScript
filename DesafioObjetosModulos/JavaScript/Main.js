import Order from './Models/Order.js';
import * as orderService from './Services/OrderService.js';

const orderData = document.getElementById('orderDataInput')
                          .innerHTML.split("\n");

const order = new Order(orderData[0],
                        parseFloat(orderData[1]),
                        parseFloat(orderData[2]));

const total = orderService.calculateTotal(order);

console.log(`Order Code: ${order.code}`);
console.log(`Total Cost: ${total}`);
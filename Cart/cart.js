import { items } from '../products.js';
import { calculateOrderToral, findItemById, getCart, clearCart } from './cartFunction.js';
import { renderItems } from './renderItems.js';


const cart = getCart();
const tbody = document.getElementById('table-body');
for (let buyItem of cart){
    const itemData = findItemById(buyItem.id, items);
    const tr = renderItems(buyItem, itemData);
    tbody.appendChild(tr);
}

const orderTotal = calculateOrderToral(cart, items);
const tdOrderTotal = document.getElementById('total');
tdOrderTotal.textContent = `$${orderTotal}`;

const orderButton = document.getElementById('order-button');
orderButton.addEventListener('click', ()=>{
    clearCart();
    window.location.replace('..');
});
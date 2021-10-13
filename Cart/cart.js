import { items } from "../products.js";
import { calculateOrderToral, findItemById } from "./cartFunction.js";
import { cart } from "./cartData.js";
import { renderItems } from "./renderItems.js";

const tbody = document.getElementById('table-body');
const total = document.getElementById('total');
for (let buyItem of cart){
    const itemData = findItemById(buyItem.id, items)
   const tr = renderItems(buyItem, itemData)
   tbody.appendChild(tr);

}

const orderTotal = calculateOrderToral(cart, items);
const tdOrderTotal = document.getElementById('total');
tdOrderTotal.textContent = `$${orderTotal}`;
console.log(orderTotal)
import { items } from "../products.js";
import { findItemById } from "./cartFunction.js";
import { cart } from "./cartData.js";

const tbody = document.getElementById('table-body');
const total = document.getElementById('total');
for (let buyItem of cart){
    const itemData = findItemById(buyItem.id, items)
    console.log(itemData);
    const tr = document.createElement('tr');
    const tdCost = document.createElement('td');
    const tdName = document.createElement('td');
    const tdQty = document.createElement('td');
    const tdTotal = document.createElement('td');
    tdCost.textContent = itemData.price;
    tdName.textContent = itemData.name;
    tdQty.textContent = buyItem.qty;
    tdTotal.textContent = buyItem.qty * itemData.price;
    total.textContent = 

    tr.append(tdName, tdCost, tdQty, tdTotal);
    tbody.appendChild(tr);

}
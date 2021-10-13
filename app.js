
   
import { renderMe } from './render-product.js';
import { items } from './products.js';
import { addItem } from './Cart/cartFunction.js';

const productList = document.getElementById('product-list');

for (let item of items){
    const itemCard = renderMe(item);
    productList.append(itemCard);
}

const addButtons = document.querySelectorAll('.buy');
for (let addBtn of addButtons){
    addBtn.addEventListener9('click', ()=> {
        addItem;
    });
}
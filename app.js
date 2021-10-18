
   
import { renderMe } from './render-product.js';
//import { items } from './products.js';
import { addItem } from './Cart/cartFunction.js';
import { getProducts } from './admin/admin-functions.js';
//import { addProduct } from './admin/admin-functions.js';

const productList = document.getElementById('product-list');
const items = getProducts();
for (let item of items){
    const itemCard = renderMe(item);
    productList.append(itemCard);
}

const addButtons = document.querySelectorAll('.buy');
for (let addBtn of addButtons){
    addBtn.addEventListener('click', ()=> {
        addItem(addBtn.id);
       
    });
}
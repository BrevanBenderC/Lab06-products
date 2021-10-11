
   
import { renderMe } from './render-product.js';
import { items } from './products.js';

const productList = document.getElementById('product-list');

for (let item of items){
  const itemCard = renderMe(item);
  productList.append(itemCard);
}
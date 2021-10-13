//import { renderMe } from '../render-product.js';
//import { items } from '../products';
import { getCart } from '../Cart/cartFunction.js';
const test = QUnit.test;

test('return cart if there', (expect)=>{
    const sampleCart = [
        { id: '1', qty: 3 },
        { id: '3', qty: 4 },
    ];
    localStorage.setItem('CART', JSON.stringify(sampleCart));
    const cart = getCart();
    expect.deepEqual(sampleCart, cart);
});/*test('return empty array if nothing there', (expect)=>{
  
    localStorage.removeItem('CART');
    const cart = getCart();

    expect.deepEqual(cart, []);
});
*/
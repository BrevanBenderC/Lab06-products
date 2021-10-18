//import { renderMe } from '../render-product.js';
//import { items } from '../products';
import { addProduct, getProducts } from '../admin/admin-functions.js';
import { getCart, addItem, clearCart } from '../Cart/cartFunction.js';
const test = QUnit.test;

test('return cart if there', (expect)=>{
    const sampleCart = [
        { id: '1', qty: 3 },
        { id: '3', qty: 4 },
    ];
    localStorage.setItem('CART', JSON.stringify(sampleCart));
    const cart = getCart();
    expect.deepEqual(sampleCart, cart);
});test('return empty array if nothing there', (expect)=>{
  
    localStorage.removeItem('CART');
    const cart = getCart();

    expect.deepEqual(cart, []);
}); test('increment items in cart with button press', (expect)=>{
    const sampleCart = [
        { id: '1', qty: 1 },
        { id: '5', qty: 1 }
    ];
    localStorage.setItem('CART', JSON.stringify(sampleCart));
    addItem('1');
    const cart = getCart();
    const expected = [
        { id: '1', qty: 2 },
        { id: '5', qty: 1 }
    ];
    expect.deepEqual(cart, expected);
});
test('add new item if none in cart', (expect) =>{

    localStorage.removeItem('CART');
    const expected = [{ id: '1', qty: 1 }];
    addItem('1');
    const cart = getCart();

    expect.deepEqual(cart, expected);

});
test('clear cart clears cart', (expect) =>{
    const sampleCart = [
        { id: '1', qty: 1 },
        { id: '5', qty: 1 }
    ]; 
    localStorage.setItem('CART', JSON.stringify(sampleCart));
    const actual = clearCart();
    const expected = undefined;
    expect.deepEqual(actual, expected);
});
test('add product should push new item from form into the array', (expect)=>{
    let products = getProducts();
    const newItem = {
        id: '6',
        name: 'Great Ball',
        img: 'https://www.serebii.net/itemdex/sprites/pgl/greatball.png',
        price: '600',
        desciption: 'Same use as Pokeball but with a 1.5x catch chance',
    };
    addProduct(newItem);
    products = getProducts();
    expect.equal(products.length, 6);

});

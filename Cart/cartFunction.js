import { items } from '../products.js';


export function findItemById(id, goods){
    console.log(id, goods);
    for (let good of items){

        if (good.id === id){
            return good;
        }
    }
}
export function calculateOrderToral(cart, items){
    let orderTotal = 0;
    for (let item of cart){
        const bought = findItemById(item.id, items);
        orderTotal = orderTotal + bought.price * bought.qty;
    }
    return orderTotal;
}
export function getCart(){
    const cartString = localStorage.getItem('CART') || '[]';
    const cart = JSON.parse(cartString);
    return cart;
}

import { items } from '../products.js';

export function getProducts(){
    let stringProduct = localStorage.getItem('PRODUCTS');
    const products = JSON.parse(stringProduct);
    if (!products){
        const itemString = JSON.stringify(items);
        localStorage.setItem('PRODUCTS', itemString);
    }
    return products || items;
}

export function addProduct(newItem){
    let products = getProducts();
    products.push(newItem);
    let productString = JSON.stringify(products);
    localStorage.setItem('PRODUCTS', productString);
}
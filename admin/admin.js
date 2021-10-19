import { addProduct } from "./admin-functions.js";

const form = document.getElementById('item-form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = new FormData(form);
    const newItem = {
        id: data.get('id'),
        name: data.get('name'),
        img: data.get('img'),
        price: data.get('price'),
        description: data.get('description')
    };
    addProduct(newItem);
    alert('new item added');
});

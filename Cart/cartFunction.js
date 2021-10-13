


export function findItemById(id, goods){
    for (let good of goods){

        if (good.id === id){
            return good;
        }
    }
}
export function calculateOrderToral(cart, items){
    let orderTotal = 0;
    for (let item of cart){
        const bought = findItemById(item.id, items);
        orderTotal = orderTotal + bought.price * item.qty;
    }
    return orderTotal;
}
export function getCart(){
    const cartString = localStorage.getItem('CART') || '[]';
    const cart = JSON.parse(cartString);
    return cart;
}
export function addItem(id){
    // set variables 
    const cart = getCart();
    const cartItem = findItemById(id, cart);
    //Now check for item already in the cart 
    if (cartItem){
        cartItem.qty++;  
    } else {//If it exists increment it
        const itemAdded = { id: id, qty: 1 };
        cart.push(itemAdded);
    }// if it doesnt exist is pushes it into the array
    const cartString = JSON.stringify(cart);
    localStorage.setItem('CART', cartString);
}
export function clearCart(){
    localStorage.removeItem('CART');
}




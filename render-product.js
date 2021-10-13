
export function renderMe(item){
    
    console.log(item)
    const itemCard = document.createElement('div');
    itemCard.classList.add('item-card');
    
    const itemHeader = document.createElement('h2');
    itemHeader.textContent = item.name;
    
    const img = document.createElement('img');
    img.src = item.img;

    const price = document.createElement('price');
    price.textContent = item.price;

    const description = document.createElement('description');
    description.textContent = item.description;

    const addButton = document.createElement('button');
    addButton.textContent = 'Add to cart';
    addButton.id = soda.id;
    addButton.classList.add('buy');
    
    itemCard.append(itemHeader, name, img, price, description, addButton);
    return itemCard;
}
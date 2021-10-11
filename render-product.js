export function renderMe (pokegoodsObject){
    const itemCard = document.createElement('div');
    itemCard.classList.add('item-card');
    
    const itemHeader = document.createElement('h2');
    itemHeader.textContent = item.name;
    
    const img = document.createElement('img');
    img.src = item.img;
    
    itemCard.append(itemHeader, img);
    return itemCard;
}
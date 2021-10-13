export function renderItems(buyItem, itemData){
    const tr = document.createElement('tr');
    const tdCost = document.createElement('td');
    const tdName = document.createElement('td');
    const tdQty = document.createElement('td');
    const tdTotal = document.createElement('td');
    tdCost.textContent = itemData.price;
    tdName.textContent = itemData.name;
    tdQty.textContent = buyItem.qty;
    tdTotal.textContent = buyItem.qty * itemData.price;

    
    tr.append(tdName, tdCost, tdQty, tdTotal);

    return tr;
}
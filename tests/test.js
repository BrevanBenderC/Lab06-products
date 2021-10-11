import { renderMe } from '../render-product.js';
import { items } from '../products';

const test = QUnit.test;

test('renderME should return an HTML snippet', (expect) => {
 
    const expected = `<div class="item-card"><h2>Potion</h2><img src="https://www.serebii.net/itemdex/sprites/pgl/potion.png"><price>P300</price><description>Heals chosen pokemon's HP by 20.</description><button>Add to cart</button></div>`;
    const potion = items[0];
    const actual = renderSoda(potion).outerHTML;
    expect.equal(actual, expected);
});
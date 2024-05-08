import * as bootstrap from 'bootstrap' // Import all of Bootstrap's JS
import cardComponent from "./cardComponent";
import {fetchItems} from "./api";

(async function renderItems() {
  try {
    const data = await fetchItems();
    const itemsHTML = data.map(item => cardComponent(item));
    document.getElementById('cards').innerHTML = itemsHTML.join('');
  } catch (error) {
    console.error('Error rendering items:', error);
  }
})()

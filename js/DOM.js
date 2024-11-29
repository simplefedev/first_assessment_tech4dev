import { ProductService } from './product.js';
import { createProductElement } from './elementManipulation.js';

async function addProductsToPage() {
  const cards = document.getElementById('cards');
  for (const product of await new ProductService().getProducts()) {
    const element = createProductElement(product, 'home');
    cards.appendChild(element);
  }
}

addProductsToPage();
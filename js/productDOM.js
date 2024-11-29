import { ProductService } from '../js/product.js';
import { createProductElement } from './elementManipulation.js';

function getProductIdFromUrl() {
  const queryString = location.search;
  return queryString.substring(queryString.indexOf('=') + 1);
}

async function fetchProduct(id) {
  return await new ProductService().getProductById(id);
}



async function addProductToPage() {
  const card = document.getElementById('product');
  const id = getProductIdFromUrl();
  const product = await fetchProduct(id);
  console.log(product)
  const productElement = createProductElement(product, 'product');
  card.appendChild(productElement);
}

addProductToPage();
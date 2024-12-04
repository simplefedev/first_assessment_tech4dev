import { ProductService } from '../js/product.js';

function getProductIdFromUrl() {
  const queryString = location.search;
  return queryString.substring(queryString.indexOf('=') + 1);
}

async function fetchProduct(id) {
  return await new ProductService().getProductById(id);
}



async function updatePage() {
  const id = getProductIdFromUrl();
  const product = await fetchProduct(id);
  const photo = document.getElementById('product-photo');
  const title = document.getElementById('title');
  const price = document.getElementById('price');
  const category = document.getElementById('category');
  category.innerText = product.category.toUpperCase();
  const description = document.getElementById('description');
  const single = document.getElementById('single');
  const pair = document.getElementById('pair');
  photo.style.backgroundImage = `url(${product.image})`;
  title.innerText = product.title;
  price.innerText = `NGN ${product.price}`;
  description.innerText = product.description;
  single.innerText = `NGN ${product.price}`;
  pair.innerText = `NGN ${product.price * 2}`;
  console.log(product)
}

updatePage();
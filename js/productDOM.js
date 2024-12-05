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
  const ratings = document.getElementById('ratings');
  const ratingsMeta = document.getElementById('ratings-meta');
  photo.style.backgroundImage = `url(${product.image})`;
  title.innerText = product.title;
  price.innerText = `NGN ${product.price}`;
  description.innerText = product.description;
  single.innerText = `NGN ${product.price}`;
  pair.innerText = `NGN ${product.price * 2}`;
  const productRating = Math.floor(product.rating.rate);

  for (let i of Array.from({length: 5}, (_, v) => v)) {
    ratings.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 aspect-square" viewBox="0 0 30 30" fill="#FFFFFF"><path class="${i + 1 <= productRating ? 'drop-shadow-lg fill-[#783EAD]' : 'fill-black'}" d="M15.765,2.434l2.875,8.512l8.983,0.104c0.773,0.009,1.093,0.994,0.473,1.455l-7.207,5.364l2.677,8.576 c0.23,0.738-0.607,1.346-1.238,0.899L15,22.147l-7.329,5.196c-0.63,0.447-1.468-0.162-1.238-0.899l2.677-8.576l-7.207-5.364 c-0.62-0.461-0.3-1.446,0.473-1.455l8.983-0.104l2.875-8.512C14.482,1.701,15.518,1.701,15.765,2.434z" fill="#FFFFFF" /></svg>`;
  }
  ratingsMeta.innerHTML = `<span class="font-medium">${product.rating.rate} / 5 of ${product.rating.count} total ratings</span>`;
  console.log(product)
}

updatePage();

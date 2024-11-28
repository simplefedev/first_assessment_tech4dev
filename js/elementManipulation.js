export function createProductElement(product) {
  const productCard = document.createElement('article');
  productCard.id = product.id;
  productCard.className = 'card';

  const cardThumbnail = document.createElement('div');
  cardThumbnail.className = 'card__thumbnail';
  productCard.appendChild(cardThumbnail);

  const cardThumbnailOverlay = document.createElement('div');
  cardThumbnailOverlay.className = 'card__thumbnail__overlay';
  cardThumbnail.appendChild(cardThumbnailOverlay);

  const cardThumbnailImage = document.createElement('img');
  cardThumbnailImage.className = 'card__thumbnail__image';
  cardThumbnailImage.src = product.image;
  cardThumbnailImage.alt = product.title;
  cardThumbnail.appendChild(cardThumbnailImage);

  const cardContents = document.createElement('div');
  cardContents.className = 'card__contents';
  productCard.appendChild(cardContents);

  const cardContentsChildOne = document.createElement('div');
  cardContentsChildOne.className = 'flex flex-dir-col gap-small';
  cardContents.appendChild(cardContentsChildOne);

  const title = document.createElement('p');
  title.className = 'font-medium';
  title.innerText = product.title;
  cardContentsChildOne.appendChild(title);
  
  const categoryAndRatings = document.createElement('p');
  categoryAndRatings.className = 'flex text-small';
  cardContentsChildOne.appendChild(categoryAndRatings);

  const category = document.createElement('span');
  category.className = 'text-small';
  category.innerText = product.category.toUpperCase();
  categoryAndRatings.appendChild(category);

  const ratings = document.createElement('span');
  ratings.innerText = `${product.rating.rate} / 5 : - ${product.rating.count} ratings`;
  ratings.className = 'color-tomato font-bold';
  categoryAndRatings.appendChild(ratings);

  const cardContentsChildTwo = document.createElement('p');
  cardContentsChildTwo.className = 'color-silver';
  // cardContentsChildTwo.innerText = product.description;
  cardContentsChildTwo.innerText = product.description.length > 160 ? `${product.description.substring(0, 160)}...` : product.description;
  cardContents.appendChild(cardContentsChildTwo);

  const cardContentsChildThree = document.createElement('p');
  cardContentsChildThree.className = 'flex gap-small text-small';
  cardContents.appendChild(cardContentsChildThree);

  const viewMore = document.createElement('p');
  viewMore.className = 'flex gap-small text-small'
  cardContents.appendChild(viewMore);
  
  const viewMoreLabel = document.createElement('span');
  viewMoreLabel.innerText = 'View Details';
  viewMore.appendChild(viewMoreLabel);

  viewMore.innerHTML += '<svg class="icon flex-col-self-end" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="#FFFFFF"><path class="icon__path" d="M13 6L13 8L22.5625 8L6.28125 24.28125L7.71875 25.71875L24 9.4375L24 19L26 19L26 6Z" fill="#FFFFFF" /></svg>';

  return productCard;
}
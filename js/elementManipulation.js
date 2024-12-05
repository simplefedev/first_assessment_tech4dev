export function createProductElement(product, caller) {
	const productCard = document.createElement('article');
	productCard.id = product.id;
	productCard.className = 'grow relative card flex group flex-col w-full max-w-[336px] md:min-w-[307px] md:max-w-xl border border-1 border-[#E0E0E0] rounded-lg shadow min-h-[514px]';

	const categoryTag = document.createElement('span');
	categoryTag.className = 'bg-[#783EAD]/80 text-xs z-50 absolute top-4 text-white font-bold shadow right-2 px-4 py-2 rounded-full';
	categoryTag.innerText = product.category;
	productCard.appendChild(categoryTag);

	const cardThumbnail = document.createElement('div');
	cardThumbnail.className = 'card__thumbnail group-hover:scale-[.8] group-hover:bg-black/0 h-[240px] bg-contain bg-no-repeat bg-center rounded-t-lg transition duration-1000';
	cardThumbnail.style.backgroundImage = `url(${product.image})`;
	console.log(product.image)
	productCard.appendChild(cardThumbnail);

	const cardContents = document.createElement('div');
	cardContents.className = 'flex flex-col gap-6 px-6 py-8';
	productCard.appendChild(cardContents);

	const cardContentsChildOne = document.createElement('div');
	cardContentsChildOne.className = 'metadata flex flex-col gap-2';
	cardContents.appendChild(cardContentsChildOne);

	const title = document.createElement('p');
	title.className = 'title font-semibold';
	if (caller === 'product') {
		title.innerText = product.title;
	} else {
		title.innerText =
			product.title.length > 25
				? `${product.title.substring(0, 25)}...`
				: product.title;
	}
	cardContentsChildOne.appendChild(title);

	const categoryAndRatings = document.createElement('p');
	categoryAndRatings.className = 'category-ratings font-medium text-xs flex gap-2';
	cardContentsChildOne.appendChild(categoryAndRatings);

	const category = document.createElement('span');
	category.className = 'category text-small';
	category.innerText = product.category.toUpperCase();
	categoryAndRatings.appendChild(category);

	const dot = document.createElement('span');
	dot.className = 'dot text-small text-[#432361]';
	dot.innerText = '●';
	categoryAndRatings.appendChild(dot);

	const ratings = document.createElement('span');
	ratings.innerText = `${product.rating.rate} / 5 : - ${product.rating.count} ratings`;
	ratings.className = 'font-bold';
	categoryAndRatings.appendChild(ratings);

	const cardContentsChildTwo = document.createElement('p');
	cardContentsChildTwo.className = 'description font-light';
	if (caller === 'product') {
		cardContentsChildTwo.innerText = product.description;
	} else {
		cardContentsChildTwo.innerText =
			product.description.length > 160
				? `${product.description.substring(0, 160)}...`
				: product.description;
	}
	cardContents.appendChild(cardContentsChildTwo);

	if (caller === 'home') {
		const viewMore = document.createElement('a');
		viewMore.href = `product.html?id=${product.id}`;
		viewMore.className = 'flex gap-1';
		cardContents.appendChild(viewMore);

		const viewMoreLabel = document.createElement('span');
		viewMoreLabel.className = 'text-[#432361] text-xs'
		viewMoreLabel.innerText = 'View Details';
		viewMore.appendChild(viewMoreLabel);

		viewMore.innerHTML +=
			'<svg class="w-3 aspect-square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="#FFFFFF"><path class="fill-[#432361]" d="M13 6L13 8L22.5625 8L6.28125 24.28125L7.71875 25.71875L24 9.4375L24 19L26 19L26 6Z" fill="#FFFFFF" /></svg>';
	}

	return productCard;
}

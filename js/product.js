export class ProductService {
  async #fetchData(url, method='GET') {
    const response = await fetch(url, {method});
    return await response.json();
  }

  async getProducts() {
    return (await this.#fetchData("https://fakestoreapi.com/products"))
    .map(product => new Product(product));
  }

  async getProductById(productId) {
    return new Product(await this.#fetchData(`https://fakestoreapi.com/products/${productId}`));
  }

  async deleteProductById(productId) {
    return new Product(await this.#fetchData(`https://fakestoreapi.com/products/${productId}`, 'DELETE'));
  }
}

export class Product {
  constructor({category, description, id, image, price, rating, title}) {
    this.category = category;
    this.description = description;
    this.id = id;
    this.image = image;
    this.price = price;
    this.rating = rating;
    this.title = title;
  }
}

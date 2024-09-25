import { Component } from "../common/Component.js";
import { ProductItem } from "./ProductItem.js";

export class ProductList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
    }
  }

  mount(container) {
    fetch(`https://fakestoreapi.com/products`)
      .then(response => response.json())
      .then(data => {
        this.state.products = data
        if (this.props.cartContext.selectedCategory) {
          this.state.products = this.state.products.filter(
            product => product.category === this.props.cartContext.selectedCategory
          );
        }

        const newProductList = this.render();
        const oldProductList = container.querySelector('.product-list');

        if (oldProductList) {
          container.replaceChild(newProductList, oldProductList);
        } else {
          container.appendChild(newProductList);
        }
      })
      .catch(error => console.error(`Error retrieving data:`, error))
  }



  render() {
    const productList = document.createElement('div')
    productList.classList = "product-list"
    productList.innerHTML = ""

    this.state.products.forEach(product => {
      const productItem = new ProductItem({
        product,
        cartContext: this.props.cartContext
      })
      productList.appendChild(productItem.render())
    })
    return productList
  }
}
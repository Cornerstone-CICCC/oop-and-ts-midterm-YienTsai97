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
        this.props.cartContext.products = data
        this.state.products = this.props.cartContext.products
        // if (this.props.cartContext.selectedCategory) {
        //   this.props.cartContext.selectCategory()
        // }
        container.appendChild(this.render())
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
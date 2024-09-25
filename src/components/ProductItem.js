import { Component } from "../common/Component.js";

export class ProductItem extends Component {
  constructor(props) {
    super(props)
    this.handleAddToCart = this.handleAddToCart.bind(this)
  }
  handleAddToCart() {
    this.props.cartContext.addProduct(this.props.product)
  } //worked

  render() {
    const product = document.createElement('div')
    product.classList = "product-item"
    product.innerHTML = `
    <img src="${this.props.product.image}" alt="${this.props.product.title}" width="100" height="120">
    <h4>${this.props.product.id}: ${this.props.product.title}</h4>
    <h5>$${this.props.product.price}</h5>
    <button class="add-to-cart-btn">Add to Cart</button>
`

    product.querySelector('.add-to-cart-btn').addEventListener("click", this.handleAddToCart)

    return product
  }
}
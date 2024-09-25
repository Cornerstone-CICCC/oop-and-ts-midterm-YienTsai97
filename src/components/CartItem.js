import { Component } from "../common/Component.js";

export class CartItem extends Component {
  constructor(props) {
    super(props)
    this.handleRemoveProduct = this.handleRemoveProduct.bind(this)
  }


  handleAddQuantity(id) {
    this.props.cartContext.addQuantity(id)
    console.log(`add ${this.props.product.id} quantity:${this.props.product.quantity}`)
  }

  handleSubstractQuantity(id) {
    this.props.cartContext.substractQuantity(id)
    console.log(`sub ${this.props.product.id} quantity:${this.props.product.quantity}`)
  }

  handleRemoveProduct(id) {
    this.props.cartContext.removeProduct(id)
    console.log(`cart - RemoveQuantity activated/ ${this.props.product.id}:${this.props.product.title}`)
  }

  render() {
    const cartUlElement = document.createElement('li')
    cartUlElement.classList = "cart-product"

    cartUlElement.innerHTML = `
    <h5>${this.props.product.id}: ${this.props.product.title}</h5>
    <p>$${this.props.product.price}</p>
    <h3>$${this.props.product.multiply}</h3>
    <div class="quantity">
      <p class="quantity-text">Quantity</p>
      <label class="quantity-calculater">
        <button id='btn-sub'>-</button>
        <p>${this.props.product.quantity}</p>
        <button id='btn-add'>+</button>
      </label>
    </div>
    <button id='btn-delete'>Delete</button>
    `

    cartUlElement.querySelector('#btn-sub').addEventListener("click", () => this.handleSubstractQuantity(this.props.product.id))
    cartUlElement.querySelector('#btn-add').addEventListener("click", () => this.handleAddQuantity(this.props.product.id))
    cartUlElement.querySelector('#btn-delete').addEventListener("click", () => this.handleRemoveProduct(this.props.product.id))

    return cartUlElement
  }
}
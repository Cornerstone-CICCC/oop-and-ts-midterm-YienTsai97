import { Component } from "../common/Component.js";
import { CartItem } from "./CartItem.js";

export class CartList extends Component {
  constructor(props) {
    super(props)
    this.state = { cart: [] }
    this.updateCart = this.updateCart.bind(this)
    this.props.cartContext.subscribe(this.updateCart)
    this.chartUl = null
  }


  updateCart(cart) {
    this.state.cart = cart
    this.chartUl.innerHTML = ""

    //// front end reduce method: equals to updateQuantity() method
    // const total = this.props.cartContext.cart.reduce((acc, current) => {
    //   return acc + current.quantity
    // }, 0)

    const totalElement = document.createElement('div')
    totalElement.innerHTML = `<h5>total item</h5> <h4>${this.props.cartContext.updateQuantity()}<h4>`
    //totalElement.innerHTML = total
    this.chartUl.appendChild(totalElement)

    const subTotalElement = document.createElement('div')
    subTotalElement.innerHTML = `<h5>Subtotal</h5><h4>${this.props.cartContext.updateSubTotal()}</h4>`
    this.chartUl.appendChild(subTotalElement)


    this.state.cart.forEach(product => {
      const cartItem = new CartItem({
        product,
        cartContext: this.props.cartContext
      })
      this.chartUl.appendChild(cartItem.render())
    });

  }

  render() {
    const cartElement = document.createElement('div')
    cartElement.innerHTML = `
    <h3>My Cart</h3>
    <ul></ul>
    </div >
  `
    this.chartUl = cartElement.querySelector('ul')

    return cartElement
  }
}
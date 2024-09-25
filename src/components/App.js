import { Component } from "../common/Component.js";
import { Header } from "./Header.js";
import { Footer } from "./Footer.js";
import { ProductList } from "./ProductList.js";
import { CartList } from "./CartList.js";


export class App extends Component {
  render() {
    const container = document.createElement('div')
    container.classList = "container"
    container.innerHTML =
      `
      <div class="header-wrapper navbar bg-body-tertiary"></div>
      <div class="content">
        <main>
        <div class="best-seller"><h2>Best Seller</h2><div>
        <div class="all-products"><h2>All Products</h2><div>
        </main>
        <div class = "cart"></div>
      </div>
      <div class="footer-wrapper"></div>
  `

    const header = new Header({ cartContext: this.props.cartContext, }).render()
    const footer = new Footer({ copyrightText: 'A-0524 All Rights Reserved.' }).render()
    const productList = new ProductList({ cartContext: this.props.cartContext, })
    const cartList = new CartList({ cartContext: this.props.cartContext }).render()


    container.querySelector('.header-wrapper').appendChild(header)
    productList.mount(container.querySelector('main'))
    container.querySelector('.cart').appendChild(cartList)
    container.querySelector('.footer-wrapper').append(footer)



    return container;
  }
}
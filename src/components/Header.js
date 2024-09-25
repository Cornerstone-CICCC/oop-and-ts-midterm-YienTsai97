import { Component } from "../common/Component.js";

export class Header extends Component {
  constructor(props) {
    super(props)
  }

  handleSelectCategory(inputcategory) {
    this.props.cartContext.selectedCategory = inputcategory
    this.props.reload
  }


  render() {
    const header = document.createElement('header')
    header.innerHTML = `
    <div class="header-top">
      <div class="header-left">
        <span>Shoppy!</span>
      </div>
      <div class="header-mid">
        <label for="">
            <input type="text">
            <button>Search</button>
        </label>
      </div>
      <div class="header-right">
        <button>chart</button>
    </div>
    <nav class="header-nav">
      <li id="viewAll"><a href="#">View All</a></li>
      <li id="electronics"><a href="#">Electronics</a></li>
      <li id="jewelery"><a href="#">Jewelery</a></li>
      <li id="men's clothing"><a href="#">Men's Clothing</a></li>
      <li id="women's clothing"><a href="#">Women's Clothing</a></li>
    <nav>
    `


    header.querySelectorAll("li").forEach(
      element => element.addEventListener("click", () =>
        this.handleSelectCategory(element.getAttribute('id')
        )))


    return header
  }
}
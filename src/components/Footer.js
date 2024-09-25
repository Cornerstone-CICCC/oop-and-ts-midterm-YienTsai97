import { Component } from "../common/Component.js";

export class Footer extends Component {
  render() {
    const footer = document.createElement('footer')
    footer.innerHTML = `
    <div class="footer-left"><span>Left</span></div>
    <div class="footer-right"><span>Right</span></div>
    <div class="footer-buttom"><span>Copyright 2024. ${this.props.copyrightText}</span></div>
    `

    return footer
  }
}
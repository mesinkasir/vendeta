import { LitElement, html } from 'lit';
import '/src/widget/the-header.js';
import '../style.css'
class thePage extends LitElement {
  render() {
    return html`
    <the-header></the-header>
      `;
  }
}
customElements.define('the-page', thePage);

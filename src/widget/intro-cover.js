import { html, LitElement } from 'lit';
export class introCover extends LitElement {
  static properties = {
    cover: { type: String },
  };

  constructor() {
    super();
    this.cover = 'https://i.gifer.com/LpSs.gif';
  }

  render() {
    return html`
    <img class="img-fluid" width="100%" src="${this.cover}"/>
    `;
  }
}
customElements.define('intro-cover', introCover);

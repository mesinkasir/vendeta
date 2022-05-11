import { html, LitElement } from 'lit';
export class SvCover extends LitElement {
  static properties = {
    cover: { type: String },
  };

  constructor() {
    super();
    this.cover = 'https://i.gifer.com/C9WE.gif';
  }

  render() {
    return html`
    <img class="img-fluid" width="100%" src="${this.cover}"/>
    `;
  }
}
customElements.define('services-cover', SvCover);

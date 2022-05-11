import { html, LitElement } from 'lit';
export class ContactCover extends LitElement {
  static properties = {
    cover: { type: String },
  };

  constructor() {
    super();
    //  this.cover = 'https://37.media.tumblr.com/tumblr_md1dv1ZKBX1rey868o1_500.gif';
    this.cover =
      'https://couragetheactor.files.wordpress.com/2019/05/ezgif-5-56b9c17dc300-1.gif';
  }

  render() {
    return html`
    <img class="img-fluid" width="100%" src="${this.cover}"/>
    `;
  }
}
customElements.define('contact-cover', ContactCover);

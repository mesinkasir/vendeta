import { html, LitElement } from 'lit';
export class AboutCover extends LitElement {
  static properties = {
    cover: { type: String },
  };

  constructor() {
    super();
    //    this.cover = 'https://c.tenor.com/jRVjxnh_pjkAAAAC/guy-fawkes-mask.gif';
    this.cover =
      'https://pa1.narvii.com/5831/6b2acaf055bc098818134ba34d6c85b6cb92597a_hq.gif';
  }

  render() {
    return html`
    <img class="img-fluid" width="100%" src="${this.cover}"/>
    `;
  }
}
customElements.define('about-cover', AboutCover);

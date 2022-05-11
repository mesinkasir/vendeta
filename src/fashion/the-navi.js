import { html, css, LitElement } from 'lit';
export class theNav extends LitElement {
  static styles = css`
  a:link {
    color:#870b12;
    text-decoration: none;
  }
  
  a:visited {
    color:#870b12;
    text-decoration: none;
  }
`;

  static properties = {
    menu1: { type: String },
    menu2: { type: String },
    menu3: { type: String },
    menu4: { type: String },
    urlmenu1: { type: String },
    urlmenu2: { type: String },
    urlmenu3: { type: String },
    urlmenu4: { type: String },
  };

  constructor() {
    super();
    (this.menu1 = 'Home'),
      (this.menu2 = 'About'),
      (this.menu3 = 'Services'),
      (this.menu4 = 'Contact'),
      (this.urlmenu1 = '#'),
      (this.urlmenu2 = '#about'),
      (this.urlmenu3 = '#services'),
      (this.urlmenu4 = '#contact');
  }

  render() {
    return html`
	<slot></slot>
    <a class="nav-link" href="${this.urlmenu1}"><small>${this.menu1}</small></a>
    <a class="nav-link" href="${this.urlmenu2}"><small>${this.menu2}</small></a>
    <a class="nav-link" href="${this.urlmenu3}"><small>${this.menu3}</small></a>
    <a class="nav-link" href="${this.urlmenu4}"><small>${this.menu4}</small></a>
    `;
  }
}
customElements.define('the-navi', theNav);

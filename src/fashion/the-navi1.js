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
      (this.urlmenu1 = '/intro.html'),
      (this.urlmenu2 = '/about.html'),
      (this.urlmenu3 = '/services.html'),
      (this.urlmenu4 = '/contact.html');
  }

  render() {
    return html`
    <a class="nav-link" href="${this.urlmenu1}">${this.menu1}</a>
    <a class="nav-link" href="${this.urlmenu2}">${this.menu2}</a>
    <a class="nav-link" href="${this.urlmenu3}">${this.menu3}</a>
    <a class="nav-link" href="${this.urlmenu4}">${this.menu4}</a>
    `;
  }
}
customElements.define('the-navi', theNav);

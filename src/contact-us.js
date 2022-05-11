import { html, css, LitElement } from 'lit';
import '../style.css'
export class contactUs extends LitElement {
  static styles = css`
  a:link {
    color:#64090e;
    text-decoration: none;
  }
  
  a:visited {
    color:#64090e;
    text-decoration: none;
  }
`;

  static properties = {
    name: { type: String },
    desc: { type: String },
    content: { type: String },
  };

  constructor() {
    super();
    (this.title = 'Contact Us'),
      (this.desc =
        'Need information & help or you need to develope modern website with us ?? just contact us'),
      (this.wa = 'Whatsapp : +6285646104747'),
      (this.email = 'axcora@gmail.com');
  }

  render() {
    return html`
    <h1><a href="/">${this.title}</a></h1>
    <h3>${this.desc}</h3>
<p>${this.wa}</p>
<p>${this.email}</p>
    `;
  }
}
customElements.define('contact-us', contactUs);

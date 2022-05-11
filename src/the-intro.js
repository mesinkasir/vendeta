import { html, css, LitElement } from 'lit';
import '../style.css'
export class theIntro extends LitElement {
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
    url: { type: String },
  };

  constructor() {
    super();
    (this.title = 'Welcome to V for Vendetta'),
      (this.desc = 'Free and open source code Vite Lit element template'),
      (this.content = 'Get Started'),
      (this.url = '#intro');
  }

  render() {
    return html`
    <h1><a href="/">${this.title}</a></h1>
    <h3>${this.desc}</h3>
<a href="${this.url}">${this.content} →</a>
    `;
  }
}
customElements.define('the-intro', theIntro);

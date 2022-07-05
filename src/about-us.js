import { html, css, LitElement } from 'lit';
import '../style.css';
export class theAbout extends LitElement {
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
    (this.title = 'About V for Vendetta'),
      (this.desc =
        'V for Vendetta Project free and open source code by axcora technology'),
      (this.content =
        'This project is present by axcora technology for easy to build  website using vite feat lit element , you can download it or clone fork repo then get started with v for vendeta lit element,how to install ?? for first make sure you have installed node js on your device or you can download node on https://nodejs.org/en/download then install on your device, now you can download v for vendetta source code project, create new folder on dekstop name it with vendeta, then you can use terminal fo visit project with run cd C:Users\\pcname\\Desktop\\vendeta - then run npm install && npm run dev - for detail documentation you can visit our blog https://www.hockeycomputindo.com/2022/05/v-for-vendetta-web-template-free.html');
  }

  render() {
    return html`
    <h1><a href="/">${this.title}</a></h1>
<h3>${this.desc}</h3>
<p>${this.content}</p>
		  <a href="https://www.hockeycomputindo.com/2022/05/v-for-vendetta-web-template-free.html">Documentation →</a><br/><br/>
    `;
  }
}
customElements.define('about-us', theAbout);

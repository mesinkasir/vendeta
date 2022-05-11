import { html, css, LitElement } from 'lit';
export class theHeader extends LitElement {
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
    content2: { type: String },
    cover: { type: String },
  };

  constructor() {
    super();
    (this.title = 'V for Vendeta'),
      (this.desc =
        'Free and open source code for build modern website using vite lit element'),
      (this.content =
        'this project present by axcora technology on https://website.axcora.com'),
      (this.content1 =
        'you can download it on github or clone fork it , need to install node js , then you can use terminal and run npm install && npm run dev , so why we need build modern website with vite lit ?? of course because very slim and blast fast for help your website to be powerfull.');
    this.cover = 'https://wallpapercave.com/uwp/uwp108327.gif';
  }

  render() {
    return html`
    <img class="img-fluid" alt="${this.title}" width="100%" src="${this.cover}"/>
    <h1><a href="/">${this.title}</a></h1>
    <h3>${this.desc}</h3>
    <p>${this.content}</p>
    <p>${this.content1}</p>
    `;
  }
}
customElements.define('the-header', theHeader);

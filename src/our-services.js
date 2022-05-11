import { html, css, LitElement } from 'lit';
import '../style.css'
export class ourServices extends LitElement {
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
    (this.title = 'Our Sevices'),
      (this.desc = 'You can order our services for website development'),
      (this.content =
        "Hey.. if you need to build a modern website with modern technology or using content management system you can call our team for best solutions. We can build a generator static site modern for you with eleventy , jekyll , astro , gatsby, svelte kit, sapper, or use framework like angular, react, laravel, symfony . Phyton web dev with flask, django, pelician and using modern cms content management system no database with pico cms and get axcora cms, so let's talk about what you needed and get started to build modern website with us.");
  }

  render() {
    return html`
    <h1><a href="/">${this.title}</a></h1>
    <h3>${this.desc}</h3>
<p>${this.content}</p>
  <a href="https://vendeta.vercel.app/">Test Demo Premium  →</a><br/><br/>
    `;
  }
}
customElements.define('our-services', ourServices);

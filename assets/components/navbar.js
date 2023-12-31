import { LitElement, html, css } from "lit";

export class Navbar extends LitElement {
  static styles = [
    css`
      :host {
        width: 100%;
        box-sizing: border-box;
        height: 96px;
        display: flex;

        padding: 0px 32px;
        justify-content: space-between;
        align-items: center;
        padding: 2rem;

        position: fixed;
        top: 0;
        z-index:100;
        mix-blend-mode:difference;
        color:white;
        transition: top 1s;
        
      }

     
      feather-icon{
        cursor: pointer;
        color:;

      }
    `,
  ];

  render() {
    return html`
      <app-logo></app-logo>
      <feather-icon icon="menu"></feather-icon>
    `;
  }
}
customElements.define("app-navbar", Navbar);

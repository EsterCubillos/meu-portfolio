import { LitElement, html, css } from "lit";

export class Paragrafo extends LitElement {
  static styles = [
    css`
      :host {
        display:flex;
        width: 336px;
        height: 133px;
        letter-spacing: 2px;
        

        p {
          margin: 0;
        }
        
    `,
  ];

  render() {
    return html` <p><slot>Parágrafo</slot></p> `;
  }
}
customElements.define("app-paragrafo", Paragrafo);
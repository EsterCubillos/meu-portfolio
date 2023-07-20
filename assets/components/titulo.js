import { LitElement, html, css } from "lit";

export class Titulo extends LitElement {
  static styles = [
    css`
      :host {
        color: #050404;
        font-family: Inria Serif;
        font-size: 13px;
        font-style: normal;
        font-weight:normal;
        line-height: normal;
        







    `,
  ];

  render() {
    return html`<slot>Título</slot>`;
  }
}
customElements.define("app-titulo", Titulo);
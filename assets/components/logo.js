import { LitElement, css } from "lit";

export class Logo extends LitElement {
  static styles = [
    css`
      :host {
        width: 48px;
        height: 48px;

        

        background-image: url('logoo.png');

         display: block;
        
      }
    `,
  ];
}
customElements.define("app-logo", Logo);
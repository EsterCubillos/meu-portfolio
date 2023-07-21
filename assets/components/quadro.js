import { LitElement, html, css } from "lit";

export class Quadro extends LitElement {
  static styles = [
    css`
      :host {
        display: flex; /*autolayout*/
        width: 360px;
        height: 298px;
        position: absolute; /* Para posicionar a imagem de forma absoluta dentro do container */
        top: -50px; /* Ajuste esse valor negativo para mover a imagem para cima. Quanto maior o valor negativo, mais a imagem se moverá para cima */
        left: 0; /* Para garantir que a imagem fique alinhada à esquerda */
        
        
        
        



      }
    `,
  ];

  render() {
    return html`<slot>imagem</slot>`;
  }
}
customElements.define("app-quadro", Quadro);
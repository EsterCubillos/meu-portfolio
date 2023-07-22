import { LitElement, css } from "lit";

export class Logo extends LitElement {
  static styles = [
    css`
      :host {
        
        width: 42px;
        height: 42px;


        background-color:black;

        -webkit-mask: url('cake.svg') no-repeat center;
        mask: url('cake.svg') no-repeat center;
        

        -webkit-mask-size: 100%;
        mask-size: 100%;    
        
      }

      div {
        padding: 10px; /* Adiciona 10 pixels de preenchimento em todas as direções (cima, baixo, esquerda, direita) */
      }
      
    `,
  ];
}
customElements.define("app-cake", Logo);

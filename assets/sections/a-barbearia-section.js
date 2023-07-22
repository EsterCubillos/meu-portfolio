import { LitElement, html, css } from "lit";
import { section } from "../styles/section-style";

export class ABarbeariaSection extends LitElement {
  static styles = [
    section,
    css`
    section {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap:1rem;
    }
      

        
      }

      app-paragrafo {
       
        width: 270px;

        text-align: justify;
        color: var(--tom-3, #664e38);
        font-family: var (--fonte-corpo);
        font-size: 16px;
        font-style: normal;
        letter-spacing:-1.424px;
        line-height: 140%
        
      }

      app-quadro {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap:1rem;
      }

    

      img {
        width: 358px;
        height: 365px;
        
      }

      app-titulo{
      position: absolute;
      left: 20px;
      top: 11px;
      color:black;
    
      }

      .bolos{
        width: 259px; 
        height: 162px;

        position: absolute;
        right: -235px;
       bottom: -153px;

       top: 50%; /* Para posicionar o texto verticalmente no meio da imagem */
       left: 40%; /* Para posicionar o texto horizontalmente no meio da imagem */
       transform: translate(-50%, -50%); /* Para centralizar o texto completamente */


       color: #FFF;
       text-shadow: -1px 1px 2px 0px rgba(251, 242, 242, 0.37);
        font-family: Inria Serif;
       font-size: 16px;
       font-style: normal;
       font-weight: 300;
       line-height: normal;
       padding: 10px; /* Espaçamento interno do texto em relação ao fundo */
      }
    `,
  ];

  render() {
    return html`

    <section>
      <app-titulo>BOLOS</app-titulo>
      <app-quadro>
      <div class="bolos">BOLOS
          </div>
      <img src="imagembolo.jpg" alt="imagem1" />
     
    </section>
   
     
    `;
  }
}
customElements.define("a-barbearia-section", ABarbeariaSection);
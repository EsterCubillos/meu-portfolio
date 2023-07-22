import { LitElement, html, css } from "lit";
import { section } from "../styles/section-style";

export class ServicosSectio extends LitElement {
  static styles = [
    section,
    css`
      :host {
        padding: 2rem 0;
      }

      app-bolinhas {
        --cor-bolinhas: var(--tom-3);
        width: 270px;
        height: 23px;
      }

      app-bolinhas:first-child {
        transform: rotate (180deg);
      }
      div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
      }
      span {
        color: var(--tom-3) font;
      }

      .titulo {
        width: 270px;
      }

      section {
        display: flex;
        align-items: center;
        gap: 36px;
        align-self: stretch;
      }

      aside {
        display: flex;
        padding: 96px 0px 8px 0px;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        align-self: stretch;
      }

      article {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 16px;
      }

      article app-paragrafo:first-child {
        /* o first child adiciona apenas o primeiro paragrafo*/
        font-weight: 700;
        color: var(--tom-3, #664e38);
      }

      .descricao {
        width: 108px;
        font-size: 0.875rem;
      }
      img {
        height: 100%;
      }

      app-quadro {
        width: 358px;
        height: 257px;
        margin-bottom: -209px;
    
    }

    .salgados img{
      width: 358px;
    height: 257px;
    margin-bottom: -209px;
    }

    .textos{
      position:relative;
        font-size: 16px;
        left: -117px;
        top: -35px;
        color: #FFF;
        text-shadow: -1px 1px 2px 0px rgba(251, 242, 242, 0.37);
       font-family: Inria Serif;
        font-size: 16px;
    }



     
    `,
  ];

  render() {
    return html`
     
    

      <section>
   
        
        <app-quadro>
          <img class= salgados src="salgados.jpg" alt="imagem" />
          <div class="textos">SALGADOS
    
          </div>
        </app-quadro>
       
          
          
        
      </section>

     
    `;
  }
}
customElements.define("servicos-sectio", ServicosSectio);
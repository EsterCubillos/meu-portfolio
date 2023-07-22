import { LitElement, html, css } from "lit";
import { section } from "../styles/section-style";

export class HeroSection extends LitElement {
  static styles = [
    section,
    css`
      section {
        display: flex;
        width: 334px;
        height: 271px;
        flex-direction:column-reverse;
        padding:
      }
      span {
        color: var(--tom-3);
        font-weight: 900%;
      }

      app-titulo {
        align-items: center;
        color:#CA1841;
      }

      app-logo {
        width: 160px;
        height: 160px;

        position: absolute;
        right: -72px;
        top: -39px;
        background-image: url('logoo.png');


      }

      img {
        height: 100%;
        width: auto;
      }

      app-paragrafo {
        font-size: 1.25;
        color:black;
        
      }

      .texto{
        width: 237px; 
        height: 40px;

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

      .feather{
        background-color:pink;
      }

      .container {
        height: 200px;
        padding: 20px;
    }
    
    /* Selecione o elemento que deseja mover e adicione uma margem superior negativa para movê-lo para cima */
    .moveme {
        margin-top: -128px; /* Ajuste o valor conforme necessário */
    }

    
    `,
  ];

  render() {
    return html`
      <div>
      <section>
     
        <app-titulo>
        
          <app-logo></app-logo>
        </app-titulo>

        <app-quadro>
          <img src="fotobolo.jpg" alt="imagem1" />
          <div class="texto">Confeitaria artesanal, onde os doces ganham vida 
          com amor e dedicação.</div>
        </app-quadro> 
        <app-titulo> 
        
        </app-titulo>


        </div>
      </section>
     
       <app-paragrafo> 
       <div class="container">
       
         <p class= "moveme"> Bem-vindo ao nosso mundo açucarado de delícias!
         Neste doce refúgio online, convidamos você a explorar os segredos e encantos da confeitaria. Prepare-se para se perder em aromas irresistíveis, cores vibrantes e sabores divinos que irão despertar todos os seus sentidos.
         </p>
        </div>
       
       </app-paragrafo>
       <app-botao></app-botao>

       
       
       



      
      

      
      
      
    `;
  }
}
customElements.define("hero-section", HeroSection);
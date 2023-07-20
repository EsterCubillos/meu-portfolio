import { LitElement, html, css } from "lit";
import { section } from "../styles/section-style";

export class HeroSection extends LitElement {
  static styles = [
    section,
    css`
      section {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
      }
      span {
        color: var(--tom-3);
        font-weight: 900%;
      }

      app-titulo {
        align-items: center;
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
      }
   
    `,
  ];

  render() {
    return html`
      <div></div>
      <section>
        <app-titulo>
       
          <app-logo></app-logo>
        </app-titulo>

        <app-quadro>
          <img src="imagembarbearia.png" alt="imagem1" />
        </app-quadro>
      </section>
      <app-paragrafo>
        Obtenha um estilo impecável, do cabelo à barba
      </app-paragrafo>
      
      
    `;
  }
}
customElements.define("hero-section", HeroSection);
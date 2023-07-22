import { LitElement, html, css } from "lit";

export class Botao extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }

      ::slotted(button),button,::slotted(a) {
        display: flex;
        width: 132px;
        height: 31px;
        padding: 10px 24px;
        border: 0;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;
        flex-shrink: 0;
        width: inherit;

        border-radius: 8px;
        border-radius: 11px;
        background: #EEABB3;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.79);
        );

        box-shadow: 0px 2px 4px 0px #665e57;

        /* tipografia */

        color: #FFF;
        text-align: center;
       font-family: Inria Serif;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        line-height: normal;
        white-space: nowrap;
        text-decoration:none;

        transition: all 200s;
        cursor: pointer;
      }
      button:hover button:active {
        background-color: color-mix(
          in srgb,
          white 15%,
          var(--button-background, var (--tom-2))
        );
        color: var(--tom-1);
      }

      
    `,
  ];

  render() {
    return html`<slot><button> Saiba  Mais </button></slot>
    
    
  
    `;
  }
}
customElements.define("app-botao", Botao);
import { LitElement, html, css } from 'https://unpkg.com/lit@2.8.0/index.js?module';
import './suscription-plan.js';

export class Suscription extends LitElement {
  static styles = css`
    .container {
      border-radius: 10px;
      background: #f9f9f9;
      font-family: Arial, sans-serif;
    }

    .title {
      font-size: 1.4rem;
    }

    .planes {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      gap: 1rem;
      flex-wrap: wrap;
      align-items: stretch;
      height: 300px;
    }
  `;

  render() {
    return html`
      <div class="container">
        <div class="title">Planes disponibles</div>
        <div class="planes">
          <suscription-plan
            nombre="Plan Básico"
            precio="CLP $4.990"
            beneficios='["Acceso limitado", "Publicidad incluida"]'
          ></suscription-plan>

          <suscription-plan
            nombre="Plan Pro"
            precio="CLP $9.990"
            beneficios='["Sin publicidad", "Contenido exclusivo", "Soporte técnico"]'
          ></suscription-plan>
        </div>
      </div>
    `;
  }
}

customElements.define('suscription-options', Suscription);

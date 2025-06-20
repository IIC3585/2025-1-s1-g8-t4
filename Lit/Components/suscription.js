import { LitElement, html, css } from 'https://unpkg.com/lit@2.8.0/index.js?module';
import './suscription-plan.js';

export class Suscription extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin-top: 2rem;
    }
    .container {
      border-radius: 12px;
      background: #ffffff;
      border: 1px solid #e0e0e0;
      box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
      padding: 2rem;
      min-height: 300px; 
      text-align: center;
      box-sizing: border-box;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .title {
      font-size: 2rem;
      margin-bottom: 2.5rem;
      font-weight: 600;
      color: #222;
    }
    .planes {
      display: flex;
      gap: 1.5rem;
      flex-wrap: wrap;
      justify-content: center;
      align-items: stretch;
      width: 100%;
    }
    @media (max-width: 1100px) {
      
      :host {
        display: flex;
      }

      .container {
        flex-grow: 1;
      }
      
      .planes {
        flex-direction: column;
        align-items: center;
        height: auto;
      }

      suscription-plan {
        width: 100%;
        max-width: 600px;
      }
    }
  `;

  static properties = {
    items: {type: Array},
  };

  constructor(){
    super();
    this.items = [{
      nombre: "Plan Básico",
      precio: "CLP $4.990",
      beneficios: ["Acceso limitado","Publicidad incluida"]
    },{
      nombre: "Plan Pro",
      precio: "CLP $9.990",
      beneficios: ["Sin publicidad","Contenido exclusivo","Soporte técnico"]
    },{
      nombre: "Plan Team",
      precio: "CLP $11.990",
      beneficios: ["Sin publicidad","Contenido exclusivo","Soporte técnico", "Hasta 5 usuarios"]
    },{
      nombre: "Plan Enterprise",
      precio: "CLP $19.990",
      beneficios: ["Sin publicidad","Contenido exclusivo","Soporte técnico", "Acceso a API","Integración personalizada"]
    }]
  }

  render() {
    return html`
      <div class="container">
        <div class="title">Planes disponibles</div>
        <div class="planes">
          ${this.items.map((item) => html`
            <suscription-plan
              .nombre=${item.nombre}
              .precio=${item.precio}
              .beneficios=${item.beneficios}>
              </suscription-plan>
            `)}
        </div>
      </div>
    `;
  }
}

customElements.define('suscription-options', Suscription);

import { LitElement, html, css } from 'https://unpkg.com/lit@2.8.0/index.js?module';

export class SuscriptionPlan extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column; 
      height: 100%;
      box-sizing: border-box;
      font-family: inherit; 
    }

    .card {
      background-color: #ffffff;
      border: 1px solid #e0e0e0;
      border-radius: 12px;
      padding: 1.5rem;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      display: flex;
      flex-direction: column;
      justify-content: space-between; 
      flex-grow: 1; 
      box-sizing: border-box;
      transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    }

    .card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
    }

    .card-main-content { 
      flex-grow: 1; 
      display: flex;
      flex-direction: column;
    }

    .title {
      font-size: 1.3rem;
      font-weight: 600;
      color: #333;
      margin-bottom: 0.5rem;
      text-align: center;
    }

    .price {
      color: #0077cc; 
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 1.25rem; 
      text-align: center;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0 0 1.5rem 0; 
      font-size: 0.9rem;
      color: #555;
      text-align: left;
    }

    ul li {
      margin-bottom: 0.6rem;
      display: flex;
      align-items: center;
      line-height: 1.4;
    }

    ul li::before {
      content: '✓';
      color: #28a745; 
      font-weight: bold;
      margin-right: 0.75rem;
      font-size: 1rem;
    }

    .suscription-button {
      background-color: #0077cc;
      color: white;
      border: none;
      padding: 0.8rem 1.5rem;
      border-radius: 8px;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 500;
      transition: background-color 0.2s ease, transform 0.2s ease;
      width: 100%;
      text-align: center;
      margin-top: auto; 
    }

    .suscription-button:hover {
      background-color: #005fa3;
      transform: translateY(-2px);
    }

    .suscription-button:active {
      transform: translateY(0);
    }
  `;


  static properties = {
    nombre: { type: String },
    precio: { type: String },
    beneficios: { type: Array },
  };

  constructor() {
    super();
    this.nombre = '';
    this.precio = '';
    this.beneficios = [];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    super.attributeChangedCallback?.(name, oldVal, newVal);
    if (name === 'beneficios') {
      try {
        this.beneficios = JSON.parse(newVal);
      } catch {
        this.beneficios = [];
      }
    }
  }

  subscribe() {
    alert(`Suscripción a ${this.nombre} realizada con éxito.`);
  }

  render() {
    return html`
      <div class="card">
        <div class="card-main-content">
          <div class="title">${this.nombre}</div>
          <div class="price">${this.precio}</div>
          <ul>
            ${this.beneficios.map((b) => html`<li>${b}</li>`)}
          </ul>
        </div>
        <button class="suscription-button" @click="${this.subscribe}">Suscribirse</button>
      </div>
    `;
  }
}

customElements.define('suscription-plan', SuscriptionPlan);
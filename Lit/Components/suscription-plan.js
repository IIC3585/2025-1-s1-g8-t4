import { LitElement, html, css } from 'https://unpkg.com/lit@2.8.0/index.js?module';

export class SuscriptionPlan extends LitElement {
  static styles = css`
  :host {
    display: block;
    height: 100%;
    box-sizing: border-box;
  }

  .card {
    border: 2px solid #007bff;
    border-radius: 10px;
    padding: 1rem;
    font-family: sans-serif;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .title {
    font-size: 1.3rem;
    font-weight: bold;
    padding-bottom: 0.5rem;
  }

  .price {
    color: #007bff;
    font-size: 1.5rem;
    padding-bottom: 0.5rem;
  }

  .suscription-button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;
  }
  .suscription-button:hover {
    background-color: #0056b3;
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
        <div class="title">${this.nombre}</div>
        <div class="price">${this.precio}</div>
        <button class="suscription-button" @click="${this.subscribe}">Suscribirse</button>
        <ul>
          ${this.beneficios.map((b) => html`<li>${b}</li>`)}
        </ul>
      </div>
    `;
  }
}

customElements.define('suscription-plan', SuscriptionPlan);
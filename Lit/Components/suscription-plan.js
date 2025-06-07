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

  render() {
    return html`
      <div class="card">
        <div class="title">${this.nombre}</div>
        <div class="price">${this.precio}</div>
        <ul>
          ${this.beneficios.map((b) => html`<li>${b}</li>`)}
        </ul>
      </div>
    `;
  }
}

customElements.define('suscription-plan', SuscriptionPlan);
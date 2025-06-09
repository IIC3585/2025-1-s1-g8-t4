const tplPlan = document.createElement('template');
tplPlan.innerHTML = `
  <style>
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

    ul#benefits {
      list-style: none;
      padding: 0;
      margin: 0 0 1.5rem 0; 
      font-size: 0.9rem;
      color: #555;
      text-align: left;
      flex-grow: 1; 
    }

    ul#benefits li {
      margin-bottom: 0.6rem;
      display: flex;
      align-items: center;
      line-height: 1.4;
    }

    ul#benefits li::before {
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
    }

    .suscription-button:hover {
      background-color: #005fa3;
      transform: translateY(-2px);
    }

    .suscription-button:active {
      transform: translateY(0);
    }
  </style>
  <div class="card">
    <div class="card-main-content">
      <div class="title" id="title"></div>
      <div class="price" id="price"></div>
      <ul id="benefits"></ul>
    </div>
    <button class="suscription-button" id="btn">Suscribirse</button>
  </div>
`;

class SuscriptionPlan extends HTMLElement {
  static get observedAttributes() {
    return ['nombre','precio','beneficios'];
  }
  constructor() {
    super();
    this.attachShadow({mode:'open'}).appendChild(tplPlan.content.cloneNode(true));
    this._onClick = this._onClick.bind(this);
  }
  connectedCallback() {
    this.shadowRoot.getElementById('btn')
      .addEventListener('click', this._onClick);
    this._update();
  }
  disconnectedCallback() {
    this.shadowRoot.getElementById('btn')
      .removeEventListener('click', this._onClick);
  }
  attributeChangedCallback(_, __, ___) {
    this._update();
  }
  _onClick() {
    const nombre = this.getAttribute('nombre') || '';
    alert(`Suscripción a ${nombre} realizada con éxito.`);
  }
  _update() {
    const nombre = this.getAttribute('nombre') || '';
    const precio = this.getAttribute('precio') || '';
    let arr;
    try {
      arr = JSON.parse(this.getAttribute('beneficios')) || [];
    } catch {
      arr = [];
    }
    this.shadowRoot.getElementById('title').textContent = nombre;
    this.shadowRoot.getElementById('price').textContent = precio;
    const ul = this.shadowRoot.getElementById('benefits');
    ul.innerHTML = '';
    for (const b of arr) {
      const li = document.createElement('li');
      li.textContent = b;
      ul.appendChild(li);
    }
  }
}

customElements.define('suscription-plan', SuscriptionPlan);

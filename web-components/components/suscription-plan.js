const tplPlan = document.createElement('template');
tplPlan.innerHTML = `
  <style>
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
    ul {
      list-style: disc;
      margin: 0.5rem 0 0 1rem;
      padding: 0;
    }
  </style>
  <div class="card">
    <div class="title" id="title"></div>
    <div class="price" id="price"></div>
    <button class="suscription-button" id="btn">Suscribirse</button>
    <ul id="benefits"></ul>
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

import './acordeon-item.js';

const tplAcc = document.createElement('template');
tplAcc.innerHTML = `
  <style>
    :host { display: block; margin-bottom: 2rem; }
    h2 { margin: 0 0 .5rem; }
  </style>
  <h2>Acordeon</h2>
  <div id="container"></div>
`;

class AcordeonBox extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode:'open'}).appendChild(tplAcc.content.cloneNode(true));
    this._items = [
      { title: "¿Qué es Lit?",           content: "Lit es una librería liviana para crear componentes web." },
      { title: "¿Qué es este componente?", content: "Se llama acordeon y permite abrir y cerrar distintas opciones." }
    ];
    this._openIndex = -1;
    this._onItemClicked = this._onItemClicked.bind(this);
  }
  connectedCallback() {
    this._render();
    this.shadowRoot.addEventListener('item-clicked', this._onItemClicked);
  }
  disconnectedCallback() {
    this.shadowRoot.removeEventListener('item-clicked', this._onItemClicked);
  }
  _onItemClicked(e) {
    const idx = e.detail.index;
    this._openIndex = (this._openIndex === idx ? -1 : idx);
    this._render();
  }
  _render() {
    const container = this.shadowRoot.getElementById('container');
    container.innerHTML = '';
    this._items.forEach((it,i) => {
      const el = document.createElement('acordeon-item');
      el.setAttribute('index', i);
      if (this._openIndex === i) el.setAttribute('open','');
      container.appendChild(el);

      const slotTitle   = document.createElement('span');
      slotTitle.slot    = 'title';
      slotTitle.textContent = it.title;
      el.appendChild(slotTitle);

      const slotContent = document.createElement('span');
      slotContent.slot  = 'content';
      slotContent.textContent = it.content;
      el.appendChild(slotContent);
    });
  }
}

customElements.define('acordeon-box', AcordeonBox);

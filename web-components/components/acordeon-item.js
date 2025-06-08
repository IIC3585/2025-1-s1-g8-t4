const tplItem = document.createElement('template');
tplItem.innerHTML = `
  <style>
    .item {
      border: 1px solid #ccc;
      margin: 0.5rem 0;
      border-radius: 5px;
      overflow: hidden;
      font-family: sans-serif;
    }
    .header {
      background: #f0f0f0;
      padding: 0.5rem 1rem;
      cursor: pointer;
      font-weight: bold;
    }
    .content {
      padding: 0.5rem 1rem;
      display: none;
    }
    :host([open]) .content {
      display: block;
    }
  </style>
  <div class="item">
    <div class="header" id="header"><slot name="title"></slot></div>
    <div class="content"><slot name="content"></slot></div>
  </div>
`;

class AcordeonItem extends HTMLElement {
  static get observedAttributes() { return ['open','index']; }
  constructor() {
    super();
    this.attachShadow({mode:'open'}).appendChild(tplItem.content.cloneNode(true));
    this._onClick = this._onClick.bind(this);
  }
  connectedCallback() {
    this.shadowRoot.getElementById('header')
      .addEventListener('click', this._onClick);
  }
  disconnectedCallback() {
    this.shadowRoot.getElementById('header')
      .removeEventListener('click', this._onClick);
  }
  attributeChangedCallback(name, oldV, newV) {
    if (name==='open') {
      if (newV===null) this.removeAttribute('open');
      else this.setAttribute('open','');
    }
  }
  _onClick() {
    const idx = Number(this.getAttribute('index'));
    this.dispatchEvent(new CustomEvent('item-clicked',{
      detail: { index: idx },
      bubbles: true,
      composed: true
    }));
  }
}

customElements.define('acordeon-item', AcordeonItem);

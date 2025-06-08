const tplItem = document.createElement('template');
tplItem.innerHTML = `
  <style>
    :host {
      display: block;
      border-bottom: 1px solid #e0e0e0;
    }
    :host(:first-of-type) {
      /* Potentially remove top border for the first item if parent has border */
    }
    :host(:last-of-type) {
      border-bottom: none;
    }
    .item {
      border-radius: 0;
      overflow: hidden;
    }
    .header {
      background: transparent; 
      padding: 1rem 1.25rem;
      cursor: pointer;
      font-weight: 500; 
      color: #333;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: background-color 0.2s ease-in-out;
    }
    .header:hover {
      background-color: #f9f9f9;
    }
    .header::after {
      content: '+'; 
      font-size: 1.25rem;
      color: #777;
      transition: transform 0.2s ease-in-out;
    }
    :host([open]) .header::after {
      content: '−'; 
      transform: rotate(180deg); 
    }
    .content {
      padding: 0 1.25rem 1rem; 
      color: #555;
      max-height: 0;
      opacity: 0;
      overflow: hidden;
      transition: max-height 0.3s ease-out, opacity 0.3s ease-out, padding-bottom 0.3s ease-out;
    }
    :host([open]) .content {
      opacity: 1;
      max-height: 500px; 
      padding-bottom: 1rem;
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

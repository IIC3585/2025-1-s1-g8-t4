import { LitElement, html, css } from 'https://unpkg.com/lit@2.8.0/index.js?module';

export class AcordeonItem extends LitElement {
  static styles = css`
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
    .open .content {
      display: block;
    }
  `;

  static properties = {
    open: { type: Boolean },
    index: { type: Number },
  };

  constructor() {
    super();
    this.open = false;
    this.index = -1;
  }

  handleClick() {
    this.dispatchEvent(new CustomEvent('item-clicked', {
      detail: { index: this.index},
      bubbles: true,
      composed: true,
    }));
  }

  render() {
    return html`
      <div class="item ${this.open ? 'open' : ''}">
        <div class="header" @click=${this.handleClick}>
          <slot name="title"></slot>
        </div>
        <div class="content">
          <slot name="content"></slot>
        </div>
      </div>
    `;
  }
}

customElements.define('acordeon-item', AcordeonItem);
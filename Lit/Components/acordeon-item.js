import { LitElement, html, css } from 'https://unpkg.com/lit@2.8.0/index.js?module';

export class AcordeonItem extends LitElement {
  static styles = css`
  :host {
    display: block;
    border-bottom: 1px solid #e0e0e0;
    font-family: inherit;
  }

  .item {
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
    font-size: 1rem;
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

  .item.open .header::after {
    content: '−';
  }

  .content {
    padding: 0 1.25rem 1rem;
    color: #555;
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out, opacity 0.3s ease-out, padding-bottom 0.3s ease-out;
    font-size: 0.95rem;
  }

  .item.open .content {
    opacity: 1;
    max-height: 500px;
    padding-bottom: 1rem;
  }

  @media (max-width: 600px) {
    .header {
      font-size: 0.95rem;
      padding: 0.75rem 1rem;
    }

    .content {
      font-size: 3rem;
      padding: 0 1rem 1rem;
    }
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
import { LitElement, html, css } from 'https://unpkg.com/lit@2.8.0/index.js?module';
import './acordeon-item.js';

export class Acordeon extends LitElement{
    static styles = css`
        :host {
            display: block;
            margin-bottom: 2rem;
            padding: 1.5rem;
            background-color: #ffffff;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        h2 {
            margin: 0 0 1rem;
            font-size: 1.75rem;
            font-weight: 600;
            color: #333;
        }
    `;
    
    static properties = {
        items: {type: Array},
        openIndex: { type: Number }
    };

    constructor(){
        super();
        this.items = [{
            title: "¿Qué es Lit?", 
            content: "Lit es una librería liviana para crear componentes web."    
        },
        {
            title: "¿Qué es este componente?", 
            content: "Se llama acordeon y permite abrir y cerrar distintas opciones."
        }];
        this.openIndex = -1;
    }

    handleItemClick(event) {
        const clickedIndex = event.detail.index;
        this.openIndex = (this.openIndex === clickedIndex) ? -1 : clickedIndex;
    }
    
    render(){
        return html`
            <h2>Acordeon</h2>
            <div @item-clicked=${this.handleItemClick}>
                ${this.items.map((item, index) => html`
                    <acordeon-item
                        .index=${index}
                        .open=${this.openIndex === index}>
                        <span slot="title">${item.title}</span>
                        <span slot="content">${item.content}</span>
                    </acordeon-item>
                `)}
            </div>
        `;
    }
}

customElements.define('acordeon-box', Acordeon);
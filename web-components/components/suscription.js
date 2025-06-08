import './suscription-plan.js';

const tplOpts = document.createElement('template');
tplOpts.innerHTML = `
  <style>
    .container {
      border-radius: 10px;
      background: #f9f9f9;
      border: 1px solid #ddd;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      font-family: Arial, sans-serif;

      padding: 1rem;
      margin-top: 2rem;

      height: 400px;

      text-align: center;
      display: grid;
      align-content: space-between;
      justify-items: center;
      box-sizing: border-box;
      width: 100%;
    }
      
    .title {
      font-size: 1.4rem;
      margin-bottom: 2rem;
      font-weight: bold;
      color: #333;
    }
    .planes {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      align-items: stretch;
      height: 300px;
    }
  </style>
  <div class="container">
    <div class="title">Planes disponibles</div>
    <div class="planes">

      <suscription-plan
        nombre="Plan Básico"
        precio="CLP $4.990"
        beneficios='["Acceso limitado","Publicidad incluida"]'
      ></suscription-plan>

      <suscription-plan
        nombre="Plan Pro"
        precio="CLP $9.990"
        beneficios='["Sin publicidad","Contenido exclusivo","Soporte técnico"]'
      ></suscription-plan>

      <suscription-plan
        nombre="Plan Team"
        precio="CLP $11.990"
        beneficios='["Sin publicidad","Contenido exclusivo","Soporte técnico", "Hasta 5 usuarios"]'
      ></suscription-plan>

       <suscription-plan
        nombre="Plan Enterprise"
        precio="CLP $19.990"
        beneficios='["Sin publicidad","Contenido exclusivo","Soporte técnico", "Acceso a API","Integración personalizada"]'
      ></suscription-plan>
    </div>
  </div>
`;

class SuscriptionOptions extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode:'open'}).appendChild(tplOpts.content.cloneNode(true));
  }
}

customElements.define('suscription-options', SuscriptionOptions);

import './suscription-plan.js';

const tplOpts = document.createElement('template');
tplOpts.innerHTML = `
  <style>
    :host {
      display: block;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin-top: 2rem;
    }
    .container {
      border-radius: 12px;
      background: #ffffff; 
      border: 1px solid #e0e0e0; 
      box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06); 
      padding: 2rem; 
      min-height: 300px; 
      text-align: center;
      box-sizing: border-box;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
      
    .title {
      font-size: 2rem;
      margin-bottom: 2.5rem;
      font-weight: 600;
      color: #222;
    }
    .planes {
      display: flex;
      gap: 1.5rem;
      flex-wrap: wrap;
      justify-content: center;
      align-items: stretch;
      width: 100%;
    }
    @media (max-width: 1100px) {
      .planes {
        flex-direction: column;
        align-items: center;
    }

    suscription-plan {
      width: 100%;
      max-width: 400px;
    }
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

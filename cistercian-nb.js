import { LitElement, css, svg } from "lit";

export class CistercianNb extends LitElement {
  static get properties() {
    return {
      nb: { type: Number },
    };
  }

  constructor() {
    super();
  }

  render() {
    return svg`
      <svg 
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="32"
        viewBox="-1 -1 22 32"
        version="1.1">
        <path d="M 10,0 v 30" id="middle-bar"/>
        <path d="M 10,0 h 10" id="one"/>
        <path d="M 10,10 h 10" id="two"/>
        <path d="M 20,0 v 10" id="three"/>
      </svg>
    `;
  }

  static get styles() {
    return [
      // language=CSS
      css`
        :host {
          display: block;
        }

        svg {
          height: calc(100%);
          width: calc(100%);
        }

        path {
          stroke: #000000;
          stroke-width: 1px;
          stroke-linecap: square;
          stroke-linejoin: miter;
        }

        #one {
          stroke: #ff0000;
        }

        #two {
          stroke: #ffff00;
        }

        #three {
          stroke: #000fff;
        }
      `,
    ];
  }
}

window.customElements.define("cistercian-nb", CistercianNb);

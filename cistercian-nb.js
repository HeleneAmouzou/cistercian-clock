import { LitElement, css, svg } from "lit";

export class CistercianNb extends LitElement {
  static get properties() {
    return {
      nb: { type: Number },
      _unite: { type: Object },
      _dizaine: { type: Object },
    };
  }

  constructor() {
    super();
    this._unite = {
      one: false,
      two: false,
      three: false,
      four: false,
      five: false,
    };
    this._dizaine = {
      one: false,
      two: false,
      three: false,
      four: false,
      five: false,
    };
  }

  _getStates(nb) {
    return {
      one: [1, 5, 7, 9].includes(nb),
      two: [2, 8, 9].includes(nb),
      three: [6, 7, 8, 9].includes(nb),
      four: [3].includes(nb),
      five: [4, 5].includes(nb),
    };
  }

  update(changeProperties) {
    super.update(changeProperties);
    if (changeProperties.has("nb")) {
      const unite = this.nb % 10;
      this._unite = this._getStates(unite);
      const dizaine = Math.floor(this.nb / 10);
      this._dizaine = this._getStates(dizaine);
    }
  }

  render() {
    return svg`
      <svg 
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="32"
        viewBox="-1 -1 21 31"
        version="1.1">
        <path d="M 10.5,0 v 30" id="middle-bar"/>
        <g id="unite">
          <path d="M 10,0 h 10" id="one" state="${
            this._unite.one ? "yes" : "no"
          }"/>
          <path d="M 10,10 h 10" id="two" state="${
            this._unite.two ? "yes" : "no"
          }"/>
          <path d="M 20,0 v 10" id="three" state="${
            this._unite.three ? "yes" : "no"
          }"/>
          <path d="M 10,0 l 10,10" id="four" state="${
            this._unite.four ? "yes" : "no"
          }"/>
          <path d="M 20,0 l -10,10" id="five" state="${
            this._unite.five ? "yes" : "no"
          }"/> 
        </g>
        <g id="dizaine">
          <path d="M 10,0 h 10" id="one" state="${
            this._dizaine.one ? "yes" : "no"
          }"/>
          <path d="M 10,10 h 10" id="two" state="${
            this._dizaine.two ? "yes" : "no"
          }"/>
          <path d="M 20,0 v 10" id="three" state="${
            this._dizaine.three ? "yes" : "no"
          }"/>
          <path d="M 10,0 l 10,10" id="four" state="${
            this._dizaine.four ? "yes" : "no"
          }"/>
          <path d="M 20,0 l -10,10" id="five" state="${
            this._dizaine.five ? "yes" : "no"
          }"/> 
        </g>
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
          transition: 200ms all linear;
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

        #four {
          stroke: #f0f;
        }

        #five {
          stroke: #0f0;
        }

        path[state="no"] {
          display: none;
        }

        #dizaine {
          transform: scale(-1, 1);
          transform-origin: center center;
        }
      `,
    ];
  }
}

window.customElements.define("cistercian-nb", CistercianNb);

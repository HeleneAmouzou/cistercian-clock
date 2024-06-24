import { LitElement, css, html } from "lit";
import "./cistercian-nb.js";

export class CistercianClock extends LitElement {
  static get properties() {
    return {
      _hours: { type: Number },
      _minutes: { type: Number },
      _seconds: { type: Number },
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this._id = setInterval(() => {
      const date = new Date();
      this._hours = date.getHours();
      this._minutes = date.getMinutes();
      this._seconds = date.getSeconds();
    }, 500);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this._id);
  }

  render() {
    return html`
      <cistercian-nb nb="${this._hours}"></cistercian-nb>
      <cistercian-nb nb="${this._minutes}"></cistercian-nb>
      <cistercian-nb nb="${this._seconds}"></cistercian-nb>
    `;
  }

  static get styles() {
    return [
      //language=css
      css`
        :host {
          padding: 1rem;
          display: grid;
          width: 300px;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }
      `,
    ];
  }
}

window.customElements.define("cistercian-clock", CistercianClock);

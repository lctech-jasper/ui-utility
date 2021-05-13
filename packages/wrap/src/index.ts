import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('wrap-ele')
export class Wrap extends LitElement {
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
      color: blue;
    }
  `;
  
  @property()
  name?: string = 'World';
  aaa?: string = 'qqq';

  render() {
    return html`<p>sHello, ${this.name}!</p>`;
  }
}

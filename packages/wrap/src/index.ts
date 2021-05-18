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

  render() {
    return html`
      <div>
        <div class="wrap_header">wrap web component</div>
        <slot></slot>
      </div>
    `;
  }
}

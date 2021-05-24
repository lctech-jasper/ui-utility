import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('lit-wrap')
export class Wrap extends LitElement {
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
      color: blue;
    }
  `;

  @property()
  username = 'i am q'

  @property({ type: Object })
  usernameInfo = {
    address: '605 Maybelle Fords'
  }


  render() {
    return html`
      <div>
        <div class="wrap_header">awrap web componen</div>
        <div class="wrap_header">only string: ${this.username}</div>
        <div class="wrap_header">only object: ${this.usernameInfo.address}</div>
        <slot></slot>
      </div>
    `;
  }
}

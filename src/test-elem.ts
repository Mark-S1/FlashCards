import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('test-elem')
export class MyElement extends LitElement {
	@property()
	id = 'STARTING';
	
	render() {
		return html`
		<p>This a test: ${this.id}</p>
		`;
	}
}

import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('card-elem')
export class CardElem extends LitElement {
	@property()
	cardText = 'Some text'
	
	render() {
		return html`
		<div @click=${this._onClick}>
			${this.cardText}
		</div>
	`
	}
	
	private _onClick() {
		console.log("click");
	}
	
	static styles = css`
	:host {
		max-width: 400px;
		max-height: 400px;
		margin: 0 auto;
		padding: 2rem;
		width: calc(33vw);
		height: calc(33vw);
		border: 1px solid black;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	`
}

declare global {
	interface HTMLElementTagNameMap {
		'card-elem': CardElem
	}
}

import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('card-elem')
export class CardElem extends LitElement {
	isFront:boolean = true;
	front:string = "front text";
	back:string = "back text";
	
	@property()
	cardText:string = this.front;
	
	render() {
		return html`
		<div id="card-area" @click=${this._onClick}>
			${this.cardText}
		</div>
	`
	}
	
	clicker(data: {front:string, back:string}) {
		this.isFront = true;
		this.front = data.front;
		this.back = data.back;
		this.cardText = this.front;
	}
	
	private _onClick() {
		this.cardText = this.isFront ? this.back : this.front;
		this.isFront = !this.isFront;
	}
	
	static styles = css`
	:host {
		max-width: 480px;
		max-height: 480px;
		min-width: 250px;
		min-height: 250px;
		margin: 0 auto;
		width: calc(40vw);
		height: calc(40vw);
		border: 0px solid black;
		font-size: 2.4rem;
		border-radius: 3vw;
		box-shadow: 6px 6px 15px gray;
	}
	
	#card-area {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2rem;
		box-sizing: border-box;
		
	}
	
	@media screen and (max-width: 625px) {
		:host {
			font-size: 1.8rem;
		}
	}
	`
}

declare global {
	interface HTMLElementTagNameMap {
		'card-elem': CardElem
	}
}

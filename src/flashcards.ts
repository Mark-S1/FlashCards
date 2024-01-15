import { CardElem } from "./card-elem";

(() => {
	const card = document.getElementById("card") as CardElem;
	const clicker = document.getElementById("clicker");
	
	let cardID = 0;
	
	let data = [
		{
			front: "front0",
			back: "back0"
		},
		{
			front: "front1",
			back: "back1"
		}
	];
	
	if(clicker && card) {
		clicker.addEventListener("click", () => {
			cardID = ++cardID % data.length;
			card.clicker(data[cardID]);
		});
	}
})();
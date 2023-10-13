window.onload = function() {
	document.getElementById("storeButton").addEventListener("click", storeData);
	
	loadData();
};

function loadData() {
	document.getElementById("dataInput").value = localStorage.getItem("strValue");
}

function storeData() {
	let data = document.getElementById("dataInput").value;
	
	localStorage.setItem("strValue", data);
}
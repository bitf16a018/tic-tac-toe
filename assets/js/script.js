var count = 1;

function reset() {
	alert();
}

function addHoverEffectLeft(){
	var a = document.getElementsByClassName("hoverLeft");
	for(var i = 0 ; i < a.length; i++){
		a[i].classList.add("bottom-edge-shadow");
	}
}

function addHoverEffectRight(){
	var a = document.getElementsByClassName("hoverRight");
	for(var i = 0 ; i < a.length; i++){
		a[i].classList.add("bottom-edge-shadow");
	}
}

function removeHoverEffect(){
	var a = document.getElementsByClassName("symbol");
	var b = document.getElementsByClassName("score");
	for(var i = 0 ; i < a.length; i++){
		a[i].classList.remove("bottom-edge-shadow");
		b[i].classList.remove("bottom-edge-shadow");
	}
}

function checkGameStatus(id) {
	if(
		hasClass("one", "o") &&
		hasClass("two", "o") &&
		hasClass("three", "o") ||
		hasClass("four", "o") &&
		hasClass("five", "o") &&
		hasClass("six", "o") ||
		hasClass("seven", "o") &&
		hasClass("eight", "o") &&
		hasClass("nine", "o") ||
		hasClass("one", "o") &&
		hasClass("four", "o") &&
		hasClass("seven", "o") ||
		hasClass("two", "o") &&
		hasClass("five", "o") &&
		hasClass("eight", "o") ||
		hasClass("three", "o") &&
		hasClass("six", "o") &&
		hasClass("nine", "o") ||
		hasClass("one", "o") &&
		hasClass("five", "o") &&
		hasClass("nine", "o") ||
		hasClass("three", "o") &&
		hasClass("five", "o") &&
		hasClass("seven", "o")
		)
	{
		alert("O won the game");
	} else if(
		hasClass("one", "x") &&
		hasClass("two", "x") &&
		hasClass("three", "x") ||
		hasClass("four", "x") &&
		hasClass("five", "x") &&
		hasClass("six", "x") ||
		hasClass("seven", "x") &&
		hasClass("eight", "x") &&
		hasClass("nine", "x") ||
		hasClass("one", "x") &&
		hasClass("four", "x") &&
		hasClass("seven", "x") ||
		hasClass("two", "x") &&
		hasClass("five", "x") &&
		hasClass("eight", "x") ||
		hasClass("three", "x") &&
		hasClass("six", "x") &&
		hasClass("nine", "x") ||
		hasClass("one", "x") &&
		hasClass("five", "x") &&
		hasClass("nine", "x") ||
		hasClass("three", "x") &&
		hasClass("five", "x") &&
		hasClass("seven", "x")
		) {
		alert("X won the game");
	} else if(count % 2 == 1) {
		document.getElementById(id).innerHTML = "⚫";
		document.getElementById(id).className = document.getElementById(id).className + " o";
		count++;
	} else {
		document.getElementById(id).innerHTML = "✔";
		document.getElementById(id).className = document.getElementById(id).className + " x";
		count++;
	}
}

function hasClass(id, className) {
	className = " " + className + " ";
	if ((" " + document.getElementById(id).className + " ").replace(/[\n\t]/g, " ").indexOf(className) > -1 ){
		return true;
	}
	return false;
}
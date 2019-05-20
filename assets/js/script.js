var count = 1;
var won = false;

function reset() {
	var a = document.getElementsByTagName("button");
	for (var i = 0; i < a.length - 1; i++) {
		// alert(a[i].id);
		// alert("fuck");
		removeClass(a[i].id, "O");
		removeClass(a[i].id, "X");
		removeClass(a[i].id, "disabled");
		a[i].innerHTML = 1;
	}
	count = 1;
	won = false;
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
	if(count == 10 && !won) {
		alert("draw. please restart the game");
		return;
	}
	if(
		hasClass("one", "O") &&
		hasClass("two", "O") &&
		hasClass("three", "O") ||
		hasClass("four", "O") &&
		hasClass("five", "O") &&
		hasClass("six", "O") ||
		hasClass("seven", "O") &&
		hasClass("eight", "O") &&
		hasClass("nine", "O") ||
		hasClass("one", "O") &&
		hasClass("four", "O") &&
		hasClass("seven", "O") ||
		hasClass("two", "O") &&
		hasClass("five", "O") &&
		hasClass("eight", "O") ||
		hasClass("three", "O") &&
		hasClass("six", "O") &&
		hasClass("nine", "O") ||
		hasClass("one", "O") &&
		hasClass("five", "O") &&
		hasClass("nine", "O") ||
		hasClass("three", "O") &&
		hasClass("five", "O") &&
		hasClass("seven", "O")
		)
	{
		alert("⚫ wins. please restart the game");
		won = true;
	} else if(
		hasClass("one", "X") &&
		hasClass("two", "X") &&
		hasClass("three", "X") ||
		hasClass("four", "X") &&
		hasClass("five", "X") &&
		hasClass("six", "X") ||
		hasClass("seven", "X") &&
		hasClass("eight", "X") &&
		hasClass("nine", "X") ||
		hasClass("one", "X") &&
		hasClass("four", "X") &&
		hasClass("seven", "X") ||
		hasClass("two", "X") &&
		hasClass("five", "X") &&
		hasClass("eight", "X") ||
		hasClass("three", "X") &&
		hasClass("six", "X") &&
		hasClass("nine", "X") ||
		hasClass("one", "X") &&
		hasClass("five", "X") &&
		hasClass("nine", "X") ||
		hasClass("three", "X") &&
		hasClass("five", "X") &&
		hasClass("seven", "X")
		)
	{
		alert("✔ wins. please restart the game");
		won = true;
	}
	else if(hasClass(id,"disabled"))
	{
		alert("already selected. please select any another one.");
		return;
	}
	else if(count % 2 == 1)
	{
		document.getElementById(id).innerHTML = "⚫";
		addClass(id, "O disabled");

		if(
			hasClass("one", "O") &&
			hasClass("two", "O") &&
			hasClass("three", "O") ||
			hasClass("four", "O") &&
			hasClass("five", "O") &&
			hasClass("six", "O") ||
			hasClass("seven", "O") &&
			hasClass("eight", "O") &&
			hasClass("nine", "O") ||
			hasClass("one", "O") &&
			hasClass("four", "O") &&
			hasClass("seven", "O") ||
			hasClass("two", "O") &&
			hasClass("five", "O") &&
			hasClass("eight", "O") ||
			hasClass("three", "O") &&
			hasClass("six", "O") &&
			hasClass("nine", "O") ||
			hasClass("one", "O") &&
			hasClass("five", "O") &&
			hasClass("nine", "O") ||
			hasClass("three", "O") &&
			hasClass("five", "O") &&
			hasClass("seven", "O")
			)
		{
			alert("⚫ wins");
			document.getElementById("oScore").value = (parseInt(document.getElementById("oScore").value) + 1);
			won = true;
		}
		count++;
	} else
	{
		document.getElementById(id).innerHTML = "✔";
		addClass(id, "X disabled");

		if(
			hasClass("one", "X") &&
			hasClass("two", "X") &&
			hasClass("three", "X") ||
			hasClass("four", "X") &&
			hasClass("five", "X") &&
			hasClass("six", "X") ||
			hasClass("seven", "X") &&
			hasClass("eight", "X") &&
			hasClass("nine", "X") ||
			hasClass("one", "X") &&
			hasClass("four", "X") &&
			hasClass("seven", "X") ||
			hasClass("two", "X") &&
			hasClass("five", "X") &&
			hasClass("eight", "X") ||
			hasClass("three", "X") &&
			hasClass("six", "X") &&
			hasClass("nine", "X") ||
			hasClass("one", "X") &&
			hasClass("five", "X") &&
			hasClass("nine", "X") ||
			hasClass("three", "X") &&
			hasClass("five", "X") &&
			hasClass("seven", "X")
			)
		{
			alert("✔ wins");
			document.getElementById("xScore").value = (parseInt(document.getElementById("xScore").value) + 1);
			won = true;
		}
		count++;
	}
	if(count == 10 && !won) {
		document.getElementById(id).innerHTML = "⚫";
		addClass(id, "O disabled");
		alert("draw.");
	}
}

function hasClass(id, className) {
	className = " " + className + " ";
	if ((" " + document.getElementById(id).className + " ").replace(/[\n\t]/g, " ").indexOf(className) > -1 ){
		return true;
	}
	return false;
}

function addClass(id, className) {
	document.getElementById(id).className = document.getElementById(id).className + " " + className;
}

function removeClass(id, className) {
	document.getElementById(id).className = document.getElementById(id).className.replace(className, "");
}

function toggleClass(id, className) {
	if(hasClass(id, className)) {
		removeClass(id, className);
	} else {
		addClass(id, className);
	}
}
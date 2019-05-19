function reset() {
	alert();
};

function addHoverEffectLeft(){
	var a = document.getElementsByClassName("hoverLeft");
	for(var i = 0 ; i < a.length; i++){
		a[i].classList.add("bottom-edge-shadow");
	}
};

function addHoverEffectRight(){
	var a = document.getElementsByClassName("hoverRight");
	for(var i = 0 ; i < a.length; i++){
		a[i].classList.add("bottom-edge-shadow");
	}
};

function removeHoverEffect(){
	var a = document.getElementsByClassName("symbol");
	var b = document.getElementsByClassName("score");
	for(var i = 0 ; i < a.length; i++){
		a[i].classList.remove("bottom-edge-shadow");
		b[i].classList.remove("bottom-edge-shadow");
	}
};
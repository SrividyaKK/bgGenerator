var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("random");

changeGradient(); //to display initial gradient

function changeGradient() {
	body.style.background = "linear-gradient(to right, " 
		+ color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background+";";
}
//console.log(color1.value);
color1.addEventListener("input",changeGradient);
//console.log(color2.value);
color2.addEventListener("input",changeGradient);

function genRanCol(){	//generate random color
	return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
}
function assignRandomColor(){
	var hue1 = genRanCol();
	var hue2 = genRanCol();
	body.style.background = "linear-gradient(to right, " 
		+ hue1 + ", " + hue2 + ")";
	css.textContent = body.style.background+";";
}
randomButton.addEventListener("click",assignRandomColor);
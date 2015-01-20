window.onload = init;
function init() {
	
	var counter = 0;
	
	var squares = document.getElementsByClassName('col-lg-2');
	
	//game function
	for (var i = 0; i < document.getElementsByClassName('col-lg-2').length; i++) {
		document.getElementsByClassName('col-lg-2')[i].addEventListener("click", markMake);

	function markMake() {
		if (event.target.getAttribute("src") == "./images/white.jpeg") {
			if (counter == 0) {
				event.target.setAttribute("src", "./images/xred.jpeg");
				counter ++;
			}
			else if (counter == 1) {
				event.target.setAttribute("src", "./images/oblue.jpeg");
				counter --;
			}
		}
		else {
			alert("Position Occupied!");
		}
	}
	}

	//reset button
	var reset = document.getElementById("reset");
	reset.addEventListener("click", resetTable);

	function resetTable() {
		for (var i = 0; i < document.getElementsByTagName('img').length; i++) {
			document.getElementsByTagName('img')[i].setAttribute("src", "./images/white.jpeg");
		}
	}

	//turn display
	var turnd = document.getElementById("turn-indicator");
	indicate();

}
	function indicate() {
		if (counter === 0) {
			turnd.innerHTML = "X's turn!";
		}
		else if (counter == 1) {
			turnd.innerHTML = "O's turn!";
		}
	}

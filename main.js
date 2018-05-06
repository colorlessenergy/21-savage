(function () {
	var text = document.querySelector("h2");

	var textSplit = text.textContent.split("");

	text.textContent = '';
	// create a span for every character and append
	// to the h2
	textSplit.forEach(function (current) {
			var span = document.createElement("span");

			span.innerHTML = current;

			text.appendChild(span);
	});

	window.setInterval(function () {
			spanChangeColor(text.querySelectorAll("span"))
	}, 1000);

	function randColor() {
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		return "rgb(" + r + ", " + g + ", " + b + ")";
	}

	function spanChangeColor(ele) {
		ele.forEach(function (current) {
				current.style.color = randColor();
		})
	}

})();


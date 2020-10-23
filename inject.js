const MAX_TIMES_TO_RUN = 5;
let counter = 1;

function makeReplacements() {
	if (counter >= MAX_TIMES_TO_RUN) return;

	const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, article, a, strong')
	for (let i=0; i<text.length; i++) {
		if (text[i].innerHTML.includes('President Trump')) {
			text[i].innerHTML = text[i].innerHTML.replace('President Trump', 'Florida Man')
		}

		if (text[i].innerHTML.includes('President Donald Trump')) {
			text[i].innerHTML = text[i].innerHTML.replace('President Donald Trump', 'Florida Man')
		}

		if (text[i].innerHTML.includes('Donald Trump')) {
			text[i].innerHTML = text[i].innerHTML.replace('Donald Trump', 'Florida Man')
		}

		if (text[i].innerHTML.includes('Trump')) {
			text[i].innerHTML = text[i].innerHTML.replaceAll('Trump', 'Florida Man')
		}
	}
	counter++;
}

(function() {
	setInterval(makeReplacements, 1000);
})();
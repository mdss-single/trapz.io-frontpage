document.addEventListener("DOMContentLoaded", function() {

	"use strict";

	[].forEach.call( document.querySelectorAll('.js-modal'), function (a) {
		var thisHref = a.getAttribute('href'),
			thisHref = thisHref.replace('#', '');
		a.addEventListener('click', function(e) {
			e.preventDefault();
			e.stopPropagation();
			document.getElementById(thisHref).classList.add('modal--active');
		}, false);

		document.addEventListener('click', function (e) {
			var el = e.target.closest('.modal__inner');
			if (!el) {
				document.getElementById(thisHref).classList.remove('modal--active');
			}
		});
	});

	[].forEach.call(document.querySelectorAll('.js-modal-close'), function (a) {
		a.addEventListener('click', function(e) {
			e.preventDefault();
			this.closest('.modal').classList.remove('modal--active');
		}, false);
	});

});
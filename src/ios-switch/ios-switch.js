(function() {
	var TAG_NAME = 'IOS-SWITCH';

	var initialX,
		isActive;

	document.addEventListener('click', function(e) {
		if (e.target.tagName === TAG_NAME) {
			var state = e.target.getAttribute('data-active');

			if (state) {
				e.target.removeAttribute('data-active');
			} else {
				e.target.setAttribute('data-active', true);
			}
		}
	})

	document.addEventListener('touchstart', function(e) {
		if (e.target.tagName === TAG_NAME) {
			var touch = e.targetTouches[0];
			initialX = touch.clientX;

			isActive = e.target.getAttribute('data-active')

			e.target.classList.add('active')
		}
	})

	document.addEventListener('touchmove', function(e) {
		if (e.target.tagName === TAG_NAME) {
			var touch = e.targetTouches[0];

			if  (touch.clientX - initialX > 20 && !isActive) {
				e.target.setAttribute('data-active', true);
				isActive = true;
				initialX = touch.clientX;
			} else if (touch.clientX - initialX < -20 && isActive) {
				e.target.removeAttribute('data-active');
				isActive = false;
				initialX = touch.clientX;
			}

			e.preventDefault();
		}
	})

	document.addEventListener('touchend', function(e) {
		if (e.target.tagName === TAG_NAME) {
			e.target.classList.remove('active')
		}
	})
})();

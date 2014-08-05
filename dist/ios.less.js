document.body.addEventListener('click', function(e) {
	if (e.target.tagName === 'ios-switch') {
		var state = e.target.getAttribute('data-active')

		if (state) {
			e.target.removeAttribute('data-active')
		} else {
			e.target.setAttribute('data-active', true)
		}
	}
})

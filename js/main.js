// DRY VERSION
const buttons = document.querySelectorAll('.btn');
const signinBtn = document.querySelector('.signin-btn');
const signupModal = document.querySelector('.signup-modal');

function showElement(e) {
	e.stopPropagation();
	e.preventDefault();
	const formData = this.dataset.show;
	const displayForm = document.querySelector(`.form[data-show="${formData}"]`);
	const modalCheck = displayForm.parentNode.className;
	this.classList.add('active');

	if (modalCheck == 'modal') {
		displayForm.parentNode.classList.add('show');
		document.querySelector('body').classList.add('no-scroll');
	}
	setTimeout(function () {
		displayForm.classList.add('show');
	}, 100);

	displayForm.addEventListener('click', noClick);

	function hideElement(e) {
		displayForm.classList.remove('show');
		setTimeout(function (e) {
			displayForm.parentNode.classList.remove('show');
		}, 300);
		signinBtn.classList.remove('active');
		document.querySelector('body').classList.remove('no-scroll');
	}


	window.addEventListener('click', hideElement);
	window.addEventListener('touchstart', hideElement);
}




function noClick(e) {
	e.stopPropagation();
}
buttons.forEach(button => button.addEventListener("click", noClick));
buttons.forEach(button => button.addEventListener("click", showElement));

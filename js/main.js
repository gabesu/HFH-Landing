// JS
// Note: touchstart event handler was introduced to fix safari ios bug that doesn't recognise click events

const buttons = document.querySelectorAll('.btn');
const signinBtn = document.querySelector('.signin-btn');
const signupModal = document.querySelector('.signup-modal');

function showElement(e) {
	//e.stopPropagation();
	e.preventDefault(); // prevents buttons from scrolling page to the top
	const formData = this.dataset.show; //gets value of data-show attribute from clicked button
	const displayForm = document.querySelector(`.form[data-show="${formData}"]`); // gets equivalent form for with data-show
	const modalCheck = displayForm.parentNode.className; // gets if the form belongs to a modal
	this.classList.add('active'); // adds active class css to the clicked button if any

	if (modalCheck == 'modal') {
		displayForm.parentNode.classList.add('show'); // displays modal
		document.querySelector('body').classList.add('no-scroll'); // prevents body from scrolling when modal pops up
	}
	setTimeout(function () {
		displayForm.classList.add('show'); // displays form
	}, 100);

	displayForm.addEventListener('click', noClick); // stops form from hiding itself when clicked
	displayForm.addEventListener('touchstart', noClick);

	// function to hide form once anywhere outside the window is clicked
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
buttons.forEach(button => button.addEventListener("touchstart", noClick));
buttons.forEach(button => button.addEventListener("click", showElement));
buttons.forEach(button => button.addEventListener("touchstart", showElement));

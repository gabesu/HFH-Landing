// Vanilla JS here

const signinBtn = document.querySelector(".signin-btn");
const signinForm = document.querySelector(".signin-form");



// function to show signin form
function showSignInForm(e) {
	// stops click on Signin button from hiding form
	e.stopPropagation();
	// adds active class to signin button
	this.classList.add('active');
	if (signinForm.classList.contains('show')) {
		signinForm.classList.remove('show');
		this.classList.remove('active');
	} else {
		signinForm.classList.add('show');
	}
}
// Click event that calls function to show signin form
signinBtn.addEventListener('click', showSignInForm);

// Hide form once anywhere in the window is clicked
window.addEventListener('click', function (e) {
	signinForm.classList.remove('show');
	signinBtn.classList.remove('active');
});
// stops click on Signin form from hiding the form itself
signinForm.addEventListener('click', function (e) {
	e.stopPropagation();
});



/// Code for Sign Up form Popup

const signupBtns = document.querySelectorAll(".signup-btn");
const signupModal = document.querySelector(".signup-modal");
const signupForm = document.querySelector(".signup-form");

// Click event that calls function to show signup form
signupBtns.forEach(signupBtn => signupBtn.addEventListener('click', function (e) {
	signupModal.classList.add('show');
	setTimeout(function () {
		signupForm.classList.add('show');
	}, 300);
}));

// Hide form once anywhere in the modal is clicked
signupModal.addEventListener('click', function (e) {
	signupForm.classList.remove('show');
	setTimeout(function () {
		signupModal.classList.remove('show');
	}, 400);
});
// stops click on Signup form from hiding the form itself
signupForm.addEventListener('click', function (e) {
	e.stopPropagation();
});

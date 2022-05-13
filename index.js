let spinning = false;
let firstNameValid = false;
let lastNameValid = false;
let emailIDValid = false;
let phoneNumberValid = false;
let stateValid = false;
let termsValid = false;

// for the onClick
function checkValidation(id) {
	_checkValidation(id);
	const inpBox = document.getElementById(id);
	console.log(inpBox.value);
	spinning = false;
}
// Checks if the inputs are correct
function _checkValidation(id) {
	const inpBox = document.getElementById(id);
	switch (id) {
		case "firstName":
			if (_validateName(inpBox.value)) {
				firstNameValid = true;
				_validationValid(id);
			} else {
				firstNameValid = false;
				_validationInvalid(id);
			}
			break;
		case "lastName":
			if (_validateName(inpBox.value)) {
				lastNameValid = true;
				_validationValid(id);
			} else {
				lastNameValid = false;
				_validationInvalid(id);
			}
			break;
		case "emailID":
			if (_validateEmail(inpBox.value)) {
				emailIDValid = true;
				_validationValid(id);
			} else {
				emailIDValid = false;
				_validationInvalid(id);
			}
			break;
		case "phoneNumber":
			if (_validateNumber(inpBox.value)) {
				phoneNumberValid = true;
				_validationValid(id);
			} else {
				phoneNumberValid = false;
				_validationInvalid(id);
			}
			break;
		case "state":
			if (_validateState(inpBox.value)) {
				stateValid = true;
				_validationValid(id);
			} else {
				stateValid = false;
				_validationInvalid(id);
			}
			break;
		case "termsAndConditions":
			if (_validateTermsAndConditions(id)) {
				termsValid = true;
				_validationValid(id);
			} else {
				termsValid = false;
				_validationInvalid(id);
			}
			break;
		default:
			break;
	}
}

// for Individual Inputs validation
function _validateEmail(mail) {
	return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail);
}

function _validateName(name) {
	console.log(name);
	return name.length > 0;
}

function _validateNumber(number) {
	return number.length == 10;
}

function _validateState(state) {
	return state != undefined && state != "Choose...";
}

function _validateTermsAndConditions(termsAndConditions) {
	return $("#" + termsAndConditions).is(":checked");
}

// if the input is Correct
function _validationValid(id) {
	const inpBox = $("#" + id);
	const validationDiv = $("#" + id + "Validation");
	inpBox.removeClass("validation-invalid-border");
	validationDiv.removeClass("validation-invalid");
	validationDiv.addClass("validation-valid");
	switch (id) {
		case "firstName":
			validationDiv.text(`Welcome ${inpBox.val()}`);
			break;
		case "lastName":
			validationDiv.text("Looks Good!");
			break;
		case "emailID":
			validationDiv.text("Looks Good!");
			break;
		case "phoneNumber":
			validationDiv.text("Looks Good!");
			break;
		case "state":
			validationDiv.text("Looks Good!");
			break;
		case "termsAndConditions":
			validationDiv.text("");
			break;
		default:
			return false;
	}
}

// If the input is incorrect
function _validationInvalid(id) {
	const inpBox = $("#" + id);
	const validationDiv = $("#" + id + "Validation");
	validationDiv.removeClass("validation-valid");
	inpBox.addClass("validation-invalid-border");
	validationDiv.addClass("validation-invalid");
	switch (id) {
		case "firstName":
			validationDiv.text("Please enter your first name");
			break;
		case "lastName":
			validationDiv.text("Please enter your last name");
			break;
		case "emailID":
			validationDiv.text("please enter a valid email address");
			break;
		case "phoneNumber":
			validationDiv.text("please enter a valid phone number");
			break;
		case "state":
			validationDiv.text("please select your state");
			break;
		case "termsAndConditions":
			validationDiv.text("please agree to the terms and conditions");
			break;
		default:
			return false;
	}
}

// A Spinner which works on focus
function spinnerValidation(id) {
	if (!spinning) {
		const validationDiv = $("#" + id + "Validation");
		validationDiv.removeClass("validation-valid");
		validationDiv.removeClass("validation-invalid");
		validationDiv.html('<i class="fa-solid fa-spinner spin"></i>');
		spinning = true;
	}
	if (currValid(id)) {
		checkValidation(id);
	}
}

// called by the spinner checks if current input is valid or not
function currValid(id) {
	const inpBox = document.getElementById(id);
	switch (id) {
		case "firstName":
			return inpBox.value.length >= 3;
		case "lastName":
			return inpBox.value.length >= 3;
		case "emailID":
			return _validateEmail(inpBox.value);
		case "phoneNumber":
			return _validateNumber(inpBox.value);
		case "state":
			return _validateState(inpBox.value);
		case "termsAndConditions":
			return _validateTermsAndConditions(id);
		default:
			return false;
	}
}

// On Submit checks all the Inputs
function checkAllValidations() {
	if (!termsValid) {
		_validationInvalid("termsAndConditions");
		$("#termsAndConditions").focus();
	}
	if (!stateValid) {
		_validationInvalid("state");
		$("#state").focus();
	}
	if (!phoneNumberValid) {
		_validationInvalid("phoneNumber");
		$("#phoneNumber").focus();
	}
	if (!emailIDValid) {
		_validationInvalid("emailID");
		$("#emailID").focus();
	}
	if (!lastNameValid) {
		_validationInvalid("lastName");
		$("#lastName").focus();
	}
	if (!firstNameValid) {
		_validationInvalid("firstName");
		$("#firstName").focus();
	}
}
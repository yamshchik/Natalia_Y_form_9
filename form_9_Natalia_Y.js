const emailInput = document.querySelector('.email-input');
const signupButton = document.querySelector('.signup-button');

signupButton.onclick = function(event) {
    event.preventDefault();

    let isValid = true;
    const emailValue = emailInput.value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValue) {
        emailInput.style.borderColor = 'red';
        isValid = false;
    } else if (!emailPattern.test(emailValue)) {
        emailInput.style.borderColor = 'red';
        isValid = false;
    } else {
        emailInput.style.borderColor = '#EBEAED';
    }

    if (isValid) {
        alert('Success');
    } else {
        alert('Failure');
    }
};

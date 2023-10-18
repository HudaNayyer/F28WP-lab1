document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
  
    function usernameFunction() {
      const username = document.getElementById('username');
      const usernameControl = document.getElementById('usernameControl');
      const usernameError = document.getElementById('usernameError');
      const value = username.value.trim();
  
      if (value === '') {
        setError(usernameError, 'Username cannot be empty');
        setValidationError(usernameControl);
      } else {
        clearError(usernameError);
        setValidationSuccess(usernameControl);
      }
    }//Creating a statement for the username, to crerate errors for empty fields and allow valid usernames to pass
  
    function emailFunction() {
      const email = document.getElementById('email');
      const emailControl = document.getElementById('emailControl');
      const emailError = document.getElementById('emailError');
      const value = email.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      if (value === '') {
        setError(emailError, 'Email cannot be empty');
        setValidationError(emailControl);
      } else if (!emailRegex.test(value)) {
        setError(emailError, 'Invalid email format');
        setValidationError(emailControl);
      } else {
        clearError(emailError);
        setValidationSuccess(emailControl);
      }
    }//Creating an email function to allow valid email formats, using the emailError element
  
    function passwordFunction() {
      const password = document.getElementById('password');
      const passwordControl = document.getElementById('passwordControl');
      const passwordError = document.getElementById('passwordError');
      const value = password.value.trim();
  
      if (value === '') {
        setError(passwordError, 'Password cannot be empty');
        setValidationError(passwordControl);
      } else if (value.length < 8) {
        setError(passwordError, 'Password must be at least 8 characters');
        setValidationError(passwordControl);
      } else {
        clearError(passwordError);
        setValidationSuccess(passwordControl);
      }
    }//A password functipn to validate certain passwords, or else creating an error
  
    function confirmPassword() {
      const confirmPassword = document.getElementById('confirmPassword');
      const confirmPasswordControl = document.getElementById('confirmPasswordControl');
      const confirmPasswordError = document.getElementById('confirmPasswordError');
      const password = document.getElementById('password').value.trim();
      const value = confirmPassword.value.trim();
  
      if (value === '') {
        setError(confirmPasswordError, 'Confirm Password cannot be empty');
        setValidationError(confirmPasswordControl);
      } else if (password !== value) {
        setError(confirmPasswordError, 'Passwords do not match');
        setValidationError(confirmPasswordControl);
      } else {
        clearError(confirmPasswordError);
        setValidationSuccess(confirmPasswordControl);
      }
    }//confimring user password fields so that they match
  
    function setError(element, message) {
      element.textContent = message;
    }
  
    function clearError(element) {
      element.textContent = '';
    }
  
    function setValidationError(element) {
      element.classList.remove('success');
      element.classList.add('error');
    }
  
    function setValidationSuccess(element) {
      element.classList.remove('error');
      element.classList.add('success');
    }
  
    form.addEventListener('submit', function (event) {
      validateUsername();
      validateEmail();
      validatePassword();
      validateConfirmPassword();
  
      const errorElements = document.querySelectorAll('.error');
      if (errorElements.length > 0) {
        event.preventDefault(); // Prevent form submission if there are errors
      }
    });
  
    // Event listeners for real-time validation
    document.getElementById('username').addEventListener('blur', validateUsername);
    document.getElementById('email').addEventListener('blur', validateEmail);
    document.getElementById('password').addEventListener('blur', validatePassword);
    document.getElementById('confirmPassword').addEventListener('blur', validateConfirmPassword);
  });
  
const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirmPassword');
        const errorText = document.getElementById('errorText');
        const submitButton = document.getElementById('submitButton');
        
        function validatePassword() {
            if (passwordInput.value !== confirmPasswordInput.value) {
                errorText.style.display = 'block';
                submitButton.disabled = true;
            } else {
                errorText.style.display = 'none';
                submitButton.disabled = false;
            }
        }
        
        passwordInput.addEventListener('input', validatePassword);
        confirmPasswordInput.addEventListener('input', validatePassword);
document.querySelector('form').addEventListener('submit', function(event) {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    if (!email.includes('@')) {
        alert('Please enter a valid email address.');
        event.preventDefault(); // Prevent form submission
    }
});